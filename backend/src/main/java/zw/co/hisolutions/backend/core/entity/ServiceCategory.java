 package zw.co.hisolutions.backend.core.entity;

import java.io.Serializable;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
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
public class ServiceCategory extends BaseEntity implements EntityWithName, Serializable{
    @Column(unique = true)
    @NotNull 
    private String name;   /*  Web Development and Hosting Services, Training Services, Hardware and Accessories Supply  */
    
    @Column(unique = true)
    @NotNull 
    private String shortDescription;   /*  webdesign, training, hardware  */
    
    @Column
    @NotNull
    private String description;   /*  plain text description  */
    
    @Column
    private String faIcon;
    
    @OneToMany(targetEntity=CatchPhrase.class, cascade=CascadeType.ALL )
    @OrderColumn
    private List<CatchPhrase> catchPhrases ;
    
    @Column(name="display_content",length = 5000)
    @NotNull
    private String displayContent;   /*  display content describing service. may contain html code  */
    
    @ManyToOne(targetEntity = DocumentMetadata.class)
    @JoinColumn(name = "image_metadata_id", referencedColumnName = "id" )  
    private DocumentMetadata imageMetadata;   /*  image path  */
    
    
    @ManyToOne(targetEntity = DocumentMetadata.class)
    @JoinColumn(name = "thumbnail_metadata_id", referencedColumnName = "id" )  
    private DocumentMetadata thumbnailMetadata;
    
//    @OneToMany(mappedBy = "serviceCategory")
//    @OrderColumn
//    private List<Product> productList ;
}
