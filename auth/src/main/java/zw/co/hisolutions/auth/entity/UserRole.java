package zw.co.hisolutions.auth.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import zw.co.hisolutions.common.entity.BaseEntity;

/**
 *
 * @author dgumbo
 */
@Entity 
@Data
@AllArgsConstructor 
@NoArgsConstructor 
public class UserRole extends BaseEntity implements GrantedAuthority{  
     
    @Column(unique = true)
    private String role;    

//    @ManyToMany( mappedBy = "authorities", fetch = FetchType.LAZY )
//    private List<User> users;

    @Override
    public String getAuthority() {
       return this.role;
    }
}
