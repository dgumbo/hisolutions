package zw.co.hisolutions.core.entity;

import java.io.Serializable;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OrderColumn;
import javax.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import zw.co.hisolutions.core.common.basic.entity.BaseEntity;

/**
 *
 * @author denzil
 */
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor 
public class Product extends BaseEntity implements Serializable{
    @NotNull
    @Column
    private String name;
    
    @NotNull
    @Column    
    private String description;
    
    @Column
    private double price;  
    
    @NotNull
    @ManyToOne(targetEntity = ProductType.class)
    @JoinColumn(name = "product_type_id", referencedColumnName = "id" )    
    private ProductType productType;   
    
    @NotNull
    @ManyToOne(targetEntity = Vendor.class)
    @JoinColumn(name = "vendor_id", referencedColumnName = "id" )    
    private Vendor vendor;         

    @ManyToMany(fetch = FetchType.EAGER)
    @OrderColumn 
    private List<Audiance> audiances;
    
   // @Transient
    @ManyToMany(fetch = FetchType.EAGER )
    @OrderColumn 
    private List<Skill> skillsToGain;    
    
   //@Transient 
    @ManyToMany(fetch = FetchType.EAGER)
    @OrderColumn 
    private List<PreRequisite> preRequisites;
    
    
   // @Transient 
    @ManyToMany(fetch = FetchType.EAGER)
    @OrderColumn 
    private List<CourseTopic> courseTopics;
    
    
  //  @Transient 
    @ManyToMany(fetch = FetchType.EAGER)
    @OrderColumn 
    private List<DistributionMethod> distributionMethods;  
    
}
