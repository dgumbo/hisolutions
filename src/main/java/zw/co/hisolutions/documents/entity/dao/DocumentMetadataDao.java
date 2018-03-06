/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package zw.co.hisolutions.documents.entity.dao;

import org.springframework.data.jpa.repository.JpaRepository; 
import zw.co.hisolutions.documents.entity.DocumentMetadata;

/**
 *
 * @author denzil
 */
public interface DocumentMetadataDao extends JpaRepository<DocumentMetadata, Long>{

    public DocumentMetadata getByFilename(String filename);
    
}
