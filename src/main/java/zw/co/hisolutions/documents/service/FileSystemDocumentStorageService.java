/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package zw.co.hisolutions.documents.service;

import java.io.File;
import org.springframework.core.io.Resource;
import zw.co.hisolutions.documents.entity.DocumentMetadata;
/**
 *
 * @author denzil
 */
public interface FileSystemDocumentStorageService {  

    Resource loadAsResource(String filename); 

    public DocumentMetadata getMetadata(String filename);

    public File getDocument(String filename);

}
