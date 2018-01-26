package zw.co.hisolutions.authentication.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.NotNull;
import lombok.Data;
import zw.co.hisolutions.common.basic.entity.BaseEntity;

@Entity
@Data
@Table(name = "_user")
public class User extends BaseEntity {

    @Column(length = 50)
    @NotNull
    private String firstName;
    
    @Column(length = 50)
    @NotNull
    private String lastName;
    
    @Column(length = 50, unique = true)
    @NotNull
    private String username;
    
    @Column(length = 255)
    @NotNull
    private String password;
    
    @Column(length = 50)
    private String email;

    private boolean cancellationAuthoriser;
    //private boolean activeStatus = true;

    @Transient
    private List<Role> role;

    @Override
    public String toString() {
        return "User{" + "id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", username=" + username + ", password=" + password + ", email=" + email +  ", cancellationAuthoriser=" + cancellationAuthoriser + ", activeStatus=" + activeStatus + "}";
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 43 * hash + (int) (this.id ^ (this.id >>> 32));
        return hash;
    }

}
