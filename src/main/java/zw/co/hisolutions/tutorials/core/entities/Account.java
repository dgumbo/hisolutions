package zw.co.hisolutions.tutorials.core.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import zw.co.hisolutions.core.entities.basic.BaseEntity;

@Entity
@Data
@RequiredArgsConstructor
public class Account extends BaseEntity implements Serializable {
    
    @NotNull
    @Column( length = 50)
    private String username;
    
    //@JsonIgnore
    @NotNull
    @Column( length = 50)
    private String password; 
    
    @NotNull
    @Column
    private boolean locked; 
    
    @NotNull 
    @Column(name="account_expired")
    private boolean accountExpired;  
    
    @NotNull
    @Column(name="credentials_expired")
    private boolean credentialsExpired;   

    @OneToMany(mappedBy = "account", cascade = CascadeType.PERSIST, fetch = FetchType.EAGER )
    private List<Blog> blogs;
}
