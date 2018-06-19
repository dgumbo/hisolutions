package zw.co.hisolutions.auth.entity;

import java.util.Collection;
import java.util.Date;
import java.util.List; 
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToMany;
import javax.persistence.OrderColumn;
import javax.persistence.Transient;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import zw.co.hisolutions.common.entity.BaseEntity;

/**
 *
 * @author dgumbo
 */
@Entity(name="users")
@Data
@AllArgsConstructor 
@NoArgsConstructor 
public class User extends BaseEntity  implements UserDetails{
    
    @Column(unique = true)
    private String username;
    private String password;
    private boolean enabled ; 
    private Date lastPasswordResetDate ;
    
    @Transient
    private String jwtUserToken ;
      
    @ManyToMany( fetch = FetchType.EAGER )
    @OrderColumn 
    private List<UserRole> roles; 
    
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {        
        return roles; 
    }  
 
    public void setAuthorities(List<UserRole> roles) {        
        //this. roles = roles; 
    }  

    @Override
    public boolean isAccountNonExpired() {
       return activeStatus;
    }

    @Override
    public boolean isAccountNonLocked() {
       return activeStatus;
    }

    @Override
    public boolean isCredentialsNonExpired() {
       return enabled;
    }

}
