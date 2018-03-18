package zw.co.hisolutions.storage.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service; 
import zw.co.hisolutions.documents.service.DocumentMetadataService;
import zw.co.hisolutions.storage.entity.DocumentMetadata;
import zw.co.hisolutions.storage.entity.dao.DocumentMetadataDao;

/**
 *
 * @author denzil
 */
@Service
public class DocumentMetadataServiceImpl implements DocumentMetadataService{
    DocumentMetadataDao documentMetadataDao;

    @Autowired
    public DocumentMetadataServiceImpl(DocumentMetadataDao documentMetadata) {
        this.documentMetadataDao = documentMetadata;
    }

    @Override
    public JpaRepository<DocumentMetadata, Long> getDao() {
        return documentMetadataDao;
    }

    @Override
    public Class getController() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    } 

    @Override
    public DocumentMetadata getByDocumentName(String filename) {
        return documentMetadataDao.getByFilename(filename);
    }
}
