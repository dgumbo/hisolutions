 package zw.co.hisolutions.core.security;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import zw.co.hisolutions.authentication.entity.UserLogin;

/**
 *
 * @author denzil
 */
public class JwtUserDetails implements UserDetails {
    private final UserLogin userLogin;
    
    public JwtUserDetails(UserLogin userLogin){
        this.userLogin = userLogin;
    }

    public JwtUserDetails(String username, String token, List<GrantedAuthority> authorities) {
        userLogin = new UserLogin(username, token, authorities) ;
    }
    
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        GrantedAuthority authority = () ->   "User";  
        
        ArrayList<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(authority);
        
        return authorities;
    }
    
    public UserLogin getAccount() {
        return userLogin;
    }

    @Override
    public String getPassword() {
        return userLogin.getPassword();
    }

    @Override
    public String getUsername() {
        return userLogin.getUsername();
    }

    @Override
    public boolean isAccountNonExpired() {
        return userLogin.isAccountNonExpired();
    }

    @Override
    public boolean isAccountNonLocked() {
        return  userLogin.isAccountNonLocked();
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return  userLogin.isCredentialsNonExpired();
    }

    @Override
    public boolean isEnabled() {
        return  userLogin.isEnabled();
    }
    
    
}
