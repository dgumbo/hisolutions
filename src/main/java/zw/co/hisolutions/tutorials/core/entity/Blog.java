package zw.co.hisolutions.tutorials.core.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import zw.co.hisolutions.security.entity.User;
import zw.co.hisolutions.core.common.basic.entity.BaseEntity;

@Entity
@Data
@RequiredArgsConstructor
public class Blog  extends BaseEntity  implements Serializable{       
    @NotNull
    private String title; 
    
    @NotNull
    private String content;  
    
    @JsonBackReference
    @NotNull
    @JoinColumn(referencedColumnName = "id", name = "account_id") 
    @ManyToOne(fetch = FetchType.LAZY)
    private User user ;        
}
