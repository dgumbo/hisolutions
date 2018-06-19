package zw.co.hisolutions.auth.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails; 
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;  
import zw.co.hisolutions.auth.controllers.SecurityController;
import zw.co.hisolutions.auth.entity.UserRole;
import zw.co.hisolutions.auth.entity.User;
import zw.co.hisolutions.auth.entity.dao.UserDao;
import zw.co.hisolutions.auth.service.UserAndRoleService;
import zw.co.hisolutions.auth.entity.dao.UserRoleDao;

/**
 *
 * @author dgumbo
 */
@Service
public class UserServiceImpl implements UserAndRoleService {

    private final UserDao userDao;
    private final UserRoleDao authorityDao;
    
    @Autowired
    public UserServiceImpl(UserDao userDao,UserRoleDao authorityDao){
        this.userDao = userDao ;
        this.authorityDao = authorityDao ;
    }
    
    @Override
    public User createUser(User user) {
        return userDao.save(user) ;
    }
    
    @Override
    public UserRole createAuthority(UserRole authority) {
        return authorityDao.save(authority) ;
    }
 
    @Override
    public UserDetails loadUserByUsername(String username) {
        User user = userDao.findByUsername(username);
        
        if (user == null) {
            throw new UsernameNotFoundException(String.format("No user found with username '%s'.", username));
        }
        
        return user ;
    }    

    @Override
    public JpaRepository<User, Long> getDao() {
        return userDao;
    }

    @Override
    public Class getController() {
        return SecurityController.class;
    }

    @Override
    public User findUserByUsername(String username) {
        User user = userDao.findByUsername(username);
        return user ;
    }
}
