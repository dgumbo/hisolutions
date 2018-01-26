package zw.co.hisolutions.core.security.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import zw.co.hisolutions.core.security.dao.RoleDao;
import zw.co.hisolutions.core.security.dao.RoleMenuDao; 
import zw.co.hisolutions.core.security.entity.Role;
import zw.co.hisolutions.core.security.entity.RoleMenu;
import zw.co.hisolutions.core.security.service.MenuGroupService;
import zw.co.hisolutions.core.security.service.RoleService;

/**
 *
 * @author denzil
 */
@Service
public class RoleServiceImpl implements RoleService {

    private RoleDao roleDao;
    private MenuGroupService menuGroupService;
    private RoleMenuDao roleMenuDao;

    @Autowired
    public RoleServiceImpl(RoleDao roleDao, MenuGroupService menuGroupService, RoleMenuDao roleMenuDao) {
        this.roleDao = roleDao;
        this.menuGroupService = menuGroupService;
        this.roleMenuDao = roleMenuDao;
    }

    @Override
    @Transactional(isolation = Isolation.READ_UNCOMMITTED, propagation = Propagation.REQUIRED)
    public String save(Role role, List<RoleMenu> roleMenu) {
        this.roleDao.save(role);
        roleMenu.stream().forEach(item -> {
            item.setRole(role);
            item.setMenu(menuGroupService.getMenuByMenuID(item.getMenu().getId()));
        });
        this.roleMenuDao.save(roleMenu);
        return "Successfully saved Role";
    }

//    @Override
//    public Role getByID(Long roleID) {
//        Role role = this.roleDao.findOne(roleID);
//        if (role == null) {
//            role = new Role();
//        }
//        return role;
//    }

    @Override
    public List<Role> findAll() {
        return (List<Role>) this.roleDao.findAll();
    }

    @Override
    public List<RoleMenu> getRoleMenuByID(Long roleID) {
        List<RoleMenu> roleMenuList = this.roleMenuDao.findByRoleId(roleID);
        if (roleMenuList != null) {
            return roleMenuList;
        }
        return new ArrayList<>();
    }

    @Override
    public List<Role> getActive() {
        return this.roleDao.findByActiveStatusTrue();
    }

    @Override
    public JpaRepository<Role, Long> getDao() {
        return roleDao;
    }
}
