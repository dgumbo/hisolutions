package zw.co.hisolutions.tutorials.core.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import java.io.Serializable;
import java.util.Date;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.validation.constraints.NotNull;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.RequiredArgsConstructor;
import zw.co.hisolutions.core.entities.basic.BaseEntity;

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
    private Account account ;        
}
