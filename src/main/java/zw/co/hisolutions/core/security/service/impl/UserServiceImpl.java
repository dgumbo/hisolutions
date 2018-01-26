package zw.co.hisolutions.core.security.service.impl;

import java.util.List; 
import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.hateoas.Resource;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
 
import zw.co.hisolutions.core.security.dao.UserDao;
import zw.co.hisolutions.core.security.entity.User;
import zw.co.hisolutions.core.security.service.RoleService;
import zw.co.hisolutions.core.security.service.UserService;

@Service
@Slf4j
public class UserServiceImpl implements UserService {

    private UserDao userDao; 
    private RoleService roleService; 
   // private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    public UserServiceImpl(UserDao userDao,   RoleService roleService/*,   BCryptPasswordEncoder bCryptPasswordEncoder*/) {
        this.userDao = userDao; 
        this.roleService = roleService; 
        //this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @Override
    @Transactional( isolation = Isolation.READ_UNCOMMITTED, propagation = Propagation.REQUIRED)
    public User save(User user) {
       // user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        user.setPassword(user.getPassword());
        this.userDao.save(user);
//        roleUserUnit.stream().forEach(item -> {
//            item.setUser(user);
//            item.setRole(roleService.getByID(item.getRole().getId()));
//            item.setUnit(unitService.getByID(item.getUnit().getId()));
//        });
//        this.roleUserUnitDao.save(roleUserUnit);
        return user;
    }

//    @Override
//    public User getByID(Long userID) {
//        User user = this.userDao.findOne(userID);
//        if (user == null) {
//            user = new User();
//        }
//        return user;
//    }
//
//    @Override
//    public List<RoleUserUnit> getRoleUserUnitByUserID(Long userID) {
//        // TODO Auto-generated method stub
//        return roleUserUnitDao.findByUserId(userID);
//    }

    @Override
    public User findByUsername(String username) {
        // TODO Auto-generated method stub
        return userDao.findByUsername(username);
    }  

    @Override
    public Resource<User> buildUserResource(User user) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    } 

    @Override
    public User updateUser(User user) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public void deleteUser(String username) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public List<User> findAll() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

}
