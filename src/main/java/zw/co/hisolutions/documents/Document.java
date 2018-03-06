package zw.co.hisolutions.documents;

import java.io.Serializable;
import lombok.AllArgsConstructor;
import lombok.Data;
import zw.co.hisolutions.documents.entity.DocumentMetadata;

/**
 * A document from an archive managed by {@link IArchiveService}.
 * 
 * @author Daniel Murygin <daniel.murygin[at]gmail[dot]com>
 */
@AllArgsConstructor
@Data
public class Document  implements Serializable { 
    private static final long serialVersionUID = 2004955454853853315L;
    
    private byte[] fileData; 
    private  DocumentMetadata documentMetadata; 
}
