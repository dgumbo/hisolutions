package zw.co.hisolutions.tutorials.core.entities;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.validation.constraints.NotNull;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.RequiredArgsConstructor;

@Entity
@Data
@RequiredArgsConstructor
@EqualsAndHashCode(of = "id")
public class Account implements Serializable {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY) 
    private Long id;
    
    @NotNull
    @Column( length = 50)
    private String name;
    
    @NotNull
    @Column( length = 50)
    private String password; 
    
    @NotNull
    @Column
    private int activeStatus; 
    
    //@NotNull
    @Column
    @Temporal(javax.persistence.TemporalType.DATE)
    private Date modifiedDate;    

    @OneToMany(mappedBy = "account", fetch = FetchType.EAGER)
    private List<Blog> blogs;    

    @OneToMany(mappedBy = "account")
    private List<BlogEntry> blogEntries;
}
