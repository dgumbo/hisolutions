/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package zw.co.hisolutions.tutorials.security;

import java.util.ArrayList;
import java.util.Collection;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import zw.co.hisolutions.tutorials.core.entities.Account;

/**
 *
 * @author denzil
 */
public class AccountUserDetails implements UserDetails {
    private final Account account;
    
    public AccountUserDetails(Account account){
        this.account = account;
    }
    
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        GrantedAuthority authority = () -> {return "User"; };
        
        ArrayList<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(authority);
        
        return authorities;
    }
    
    public Account getAccount() {
        return account;
    }

    @Override
    public String getPassword() {
        return account.getPassword();
    }

    @Override
    public String getUsername() {
        return account.getUsername();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;//account.isAccountExpired() == false;
    }

    @Override
    public boolean isAccountNonLocked() {
        return  true;//account.isLocked()== false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return  true;//account.isCredentialsExpired()== false;
    }

    @Override
    public boolean isEnabled() {
        return  true;//account.isActive();
    }
    
    
}
