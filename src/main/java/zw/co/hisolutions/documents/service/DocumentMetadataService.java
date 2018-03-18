package zw.co.hisolutions.documents.service;

import zw.co.hisolutions.core.common.basic.service.GenericService; 
import zw.co.hisolutions.storage.entity.DocumentMetadata;

/**
 *
 * @author denzil
 */
public interface DocumentMetadataService extends GenericService<DocumentMetadata, Long>{

    public DocumentMetadata getByDocumentName(String filename);
    
}
