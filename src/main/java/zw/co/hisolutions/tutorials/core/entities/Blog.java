package zw.co.hisolutions.tutorials.core.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.validation.constraints.NotNull;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.RequiredArgsConstructor;

@Entity
@Data
@EqualsAndHashCode(of = "id")
@RequiredArgsConstructor
public class Blog {    
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY) 
    private Long id;
    
    @NotNull
    private String name;
    
    @NotNull
    @JoinColumn(referencedColumnName = "id", name = "accountId")
    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    private Account account ;
    
    @NotNull
    @Column
    private int activeStatus; 
    
    @NotNull
    @Column
    @Temporal(javax.persistence.TemporalType.DATE)
    private Date modifiedDate;   
}
