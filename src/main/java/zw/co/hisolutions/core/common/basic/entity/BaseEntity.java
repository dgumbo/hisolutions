 package zw.co.hisolutions.core.common.basic.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.google.gson.Gson;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.validation.constraints.NotNull;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.hibernate.annotations.Proxy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.Version;
import org.springframework.data.jpa.domain.support.AuditingEntityListener; 
//import zw.co.hisolutions.core.security.JwtUserDetails;

/**
 *
 * @author denzil
 */
@EntityListeners(AuditingEntityListener.class)
@MappedSuperclass
@Data
@EqualsAndHashCode(of = "id")
public class BaseEntity implements Serializable {
//    
//    @Autowired
//    @JsonIgnore
//    JwtUserDetails userDetails;

   // private static final UsernameAuditorAware usernameAuditorAware = new UsernameAuditorAware();
    private static final Gson gson= new Gson();
    
   private static final DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
   
   @JsonIgnore
   public String getAuditDetails(){
       return toString();
   }
   
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected long id;

    @Version
    private long version = 1L;

    @NotNull
    @Column(name = "created_by_user", updatable = false)
    @CreatedBy 
    private String createdByUser;
    
    @NotNull
    @Column(name = "creation_time", updatable = false)
    private String creationTime;

    @Column(name = "modified_by_user")
    @LastModifiedBy
    private String modifiedByUser;

    @Column(name = "modification_time")
    private String modificationTime;
    
    @NotNull
    @Column(name = "active_status")
    protected boolean activeStatus = true;

    @PrePersist
    public void prePersist() {
        this.creationTime = dtf.format(LocalDateTime.now());
        this.modificationTime = dtf.format(LocalDateTime.now());
        
     //   Account account =   accountUserDetails.getAccount();
        
        this.createdByUser = "test" ;// account.getUsername();
        this.modifiedByUser = "test" ;// account.getUsername() ;// usernameAuditorAware.getCurrentAuditor();
    }

    @PreUpdate
    public void preUpdate() {
//        Account account = accountUserDetails.getAccount();
        
        this.modificationTime = dtf.format(LocalDateTime.now());
        this.modifiedByUser = "test" ;//account.getUsername() ;// usernameAuditorAware.getCurrentAuditor();
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 43 * hash + (int) (this.id ^ (this.id >>> 32));
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        
        if (obj == null) {
            return false;
        }
        
        if (getClass() != obj.getClass()) {
            return false;
        }
        
        final BaseEntity other = (BaseEntity) obj;
        if (this.id != other.id) {
            return false;
        }
        return true;
    }    
}
