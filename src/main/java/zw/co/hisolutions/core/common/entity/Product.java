package zw.co.hisolutions.core.common.entity;

import java.io.Serializable;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import zw.co.hisolutions.common.basic.entity.BaseEntity;

/**
 *
 * @author denzil
 */
@Entity
@Data
@RequiredArgsConstructor
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
    @JoinColumn(name = "product_type_id", referencedColumnName = "id" )    
    private ProductType type;   
    
    @NotNull
    @JoinColumn(name = "vendor_id", referencedColumnName = "id" )    
    private Vendor vendor;         
    
    @OneToMany
    private List<Skill> skillsToGain;
    
    @OneToMany
    private List<PreRequisite> preRequisites;
    
    @OneToMany
    private List<Audiance> audiances;
    
    @OneToMany
    private List<CourseTopic> courseTopics;
    
    @OneToMany
    private List<DistributionMethod> distributionMethods;   
    
}
