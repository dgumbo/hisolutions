package zw.co.hisolutions.security.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import zw.co.hisolutions.security.dao.MenuDao;
import zw.co.hisolutions.security.dao.MenuGroupDao;
import zw.co.hisolutions.security.dao.RoleMenuDao;
import zw.co.hisolutions.security.entity.Menu;
import zw.co.hisolutions.security.entity.MenuGroup;
import zw.co.hisolutions.security.service.MenuGroupService;

@Service
public class MenuGroupServiceImpl implements MenuGroupService {

    private MenuGroupDao menuGroupDao;
    private MenuDao menuDao;
    private RoleMenuDao roleMenuDao;

    @Autowired
    public MenuGroupServiceImpl(MenuGroupDao menuGroupDao, MenuDao menuDao, RoleMenuDao roleMenuDao) {
        this.menuGroupDao = menuGroupDao;
        this.menuDao = menuDao;
        this.roleMenuDao = roleMenuDao;
    }

    @Override
    @Transactional(isolation = Isolation.READ_UNCOMMITTED, propagation = Propagation.REQUIRED)
    public String save(MenuGroup menuGroup, List<Menu> menus) {
        this.menuGroupDao.save(menuGroup);
        menus.stream().forEach(item -> {
            item.setMenuGroup(menuGroup);
        });
        this.menuDao.save(menus);
        return "Successfully saved Menu Group";
    }

//    @Override
//    public MenuGroup getByID(Long menuGroupID) {
//        MenuGroup menuGroup = menuGroupDao.findOne(menuGroupID);
//        if (menuGroup != null) {
//            return menuGroup;
//        }
//        return new MenuGroup();
//    }

    @Override
    public List<Menu> getMenuByID(Long menuGroupID) {
        return this.menuDao.findByMenuGroupId(menuGroupID);
    }

    @Override
    public List<Menu> getMenuActive() {
        return this.menuDao.findByActiveStatusTrue();
    }

    @Override
    public List<MenuGroup> getByRoleID(Long roleID) {
        Map<Long, MenuGroup> groups = new HashMap<>();
        Stream<Menu> menus = roleMenuDao.findByRoleId(roleID).stream().map(e -> e.getMenu()).distinct();
        menus.forEach(e -> {
            if (!groups.containsKey(e.getMenuGroup().getId())) {
                groups.put(e.getMenuGroup().getId(), e.getMenuGroup());
            }
            groups.get(e.getMenuGroup().getId()).getMenus().add(e);
        });
        return new ArrayList<>(groups.values());
    }

    @Override
    public Menu getMenuByMenuID(Long menuID) {
        return menuDao.findById(menuID).get();
    }

    @Override
    public JpaRepository<MenuGroup, Long> getDao() {
        return menuGroupDao;
    }
}
