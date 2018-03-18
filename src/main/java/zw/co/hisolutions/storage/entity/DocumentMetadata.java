package zw.co.hisolutions.storage.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor; 
import zw.co.hisolutions.core.common.basic.entity.BaseEntity;
import zw.co.hisolutions.storage.Status;

/**
 *
 * @author denzil
 */
@Entity//(name = "document_metadata")
@Data
@AllArgsConstructor 
@NoArgsConstructor
public class DocumentMetadata extends BaseEntity implements Serializable  {
    @Column(unique = true)
    @NotNull
    private String filename; 

    @NotNull
    private String mimeType; 
    
    @JsonIgnore
    @Column
    @NotNull
    private String filePath; 
    
    @Column
    @NotNull    
    private Status status;
    
    @Column    
    private String description;
    
    
    
//    public Properties createProperties() {
//        Properties props = new Properties();
//        props.setProperty(PROP_UUID, getUuid());
//        props.setProperty(PROP_FILE_NAME, getFileName());
//        props.setProperty(PROP_PERSON_NAME, getPersonName());
//        props.setProperty(PROP_DOCUMENT_DATE, DATE_FORMAT.format(getDocumentDate()));
//        return props;
//    }
}
