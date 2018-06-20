package zw.co.hisolutions.backend.storage.service;

import zw.co.hisolutions.common.service.GenericService; 
import zw.co.hisolutions.backend.storage.entity.DocumentMetadata;

/**
 *
 * @author denzil
 */
public interface DocumentMetadataService extends GenericService<DocumentMetadata, Long>{

    public DocumentMetadata getByDocumentName(String filename);
    
}
