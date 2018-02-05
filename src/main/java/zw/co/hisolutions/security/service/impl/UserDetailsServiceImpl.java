/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package zw.co.hisolutions.security.service.impl;

import java.util.Collection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component; 
import zw.co.hisolutions.security.entity.User;
import zw.co.hisolutions.security.entity.UserLogin;
import zw.co.hisolutions.security.service.UserService;  
import zw.co.hisolutions.security.userdetail.JwtUserDetails;

/**
 *
 * @author denzil
 */
@Component
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    UserService userService; 

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userService.findByUsername(username);

        if (user == null) {
            throw new UsernameNotFoundException("no user found with that username");
        }
        Collection<? extends GrantedAuthority> grantedAuthorities = null;
        
        UserLogin userLogin = new UserLogin(user.getUsername(), user.getPassword(), grantedAuthorities);
        //userLogin.setRoleID(roleID);
        userLogin.setUserID(user.getId());
        //userLogin.setBroswer(this.getBrowser(request));
        //userLogin.setIp(this.getIPAddress(request));
        
        return new JwtUserDetails(userLogin);
    }

}
