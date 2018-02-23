 package zw.co.hisolutions.core.entity;

import java.io.Serializable;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
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
public class ServiceCategory extends BaseEntity implements Serializable{
    @Column
    @NotNull
    private String name;   /*  Web Development, Training Services, Web Hosting  */
    
    @Column
    @NotNull
    private String description;   /*  plain text description  */
    
    @Column(name="display_content")
    @NotNull
    private String displayContent;   /*  display content describing service. may contain html code  */
    
    @Column
    @NotNull
    private String imageUrl;   /*  image path  */
    
    @OneToMany(mappedBy = "serviceCategory")
    private List<Product> productList ;
}
