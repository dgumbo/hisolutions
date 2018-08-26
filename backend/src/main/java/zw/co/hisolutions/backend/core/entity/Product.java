package zw.co.hisolutions.backend.core.entity;

import java.io.Serializable;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OrderColumn;
import javax.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import zw.co.hisolutions.common.entity.BaseEntity; 
import zw.co.hisolutions.storage.entity.DocumentMetadata;
import zw.co.hisolutions.common.entity.EntityWithName;

/**
 *
 * @author denzil
 */
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor 
public class Product extends BaseEntity implements EntityWithName, Serializable{
    
    //@Enumerated(EnumType.STRING)
    
    @Column(unique = true) 
    private String name;
    
    @NotNull    
    private String description;
     
    private double price;  
     
    private String  faIcon;
        
    @Column( length = 5000)
    @NotNull
    private String displayContent;   /*  display content . may contain html code  */
    
    @OneToMany(targetEntity=Benefit.class, cascade=CascadeType.ALL )
    @OrderColumn
    private List<Benefit> benefits ;
     
    //@NotNull
    @ManyToOne(targetEntity = DocumentMetadata.class)
    @JoinColumn(name = "image_metadata_id", referencedColumnName = "id" )  
    private DocumentMetadata imageMetadata;
     
    private String imageUrl;
        
    @NotNull
    @ManyToOne(targetEntity = ServiceCategory.class)
    @JoinColumn(name = "service_category_id", referencedColumnName = "id" )  
    private ServiceCategory serviceCategory;
    
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
    private List<Topic> courseTopics;
    
    
  //  @Transient 
    @ManyToMany(fetch = FetchType.EAGER)
    @OrderColumn 
    private List<DistributionMethod> distributionMethods;  
    
}
