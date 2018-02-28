 package zw.co.hisolutions.core.entity;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor; 
import zw.co.hisolutions.core.common.basic.entity.BaseEntity;
import zw.co.hisolutions.documents.entity.DocumentMetadata;

/**
 *
 * @author denzil
 */
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor 
public class ServiceCategory extends BaseEntity implements Serializable{
    @Column
    @NotNull
    private String name;   /*  Web Development, Training Services, Web Hosting  */
    
    @Column
    @NotNull
    private String description;   /*  plain text description  */
    
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
