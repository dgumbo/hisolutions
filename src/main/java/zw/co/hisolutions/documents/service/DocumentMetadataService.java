/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package zw.co.hisolutions.documents.service;

import java.io.Serializable;
import zw.co.hisolutions.core.common.basic.service.GenericService;
import zw.co.hisolutions.documents.entity.DocumentMetadata;

/**
 *
 * @author denzil
 */
public interface DocumentMetadataService extends GenericService<DocumentMetadata, Long>{

    public DocumentMetadata getByDocumentName(String filename);
    
}
