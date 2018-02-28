/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package zw.co.hisolutions.documents.service;

import java.io.File;
import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Path;
import java.util.List;
import zw.co.hisolutions.documents.entity.DocumentMetadata;
/**
 *
 * @author denzil
 */
public interface FileSystemDocumentStorageService {

    void init();

    DocumentMetadata store(MultipartFile file);

    List<DocumentMetadata>scanServerDirectory();

    Path load(String filename);

    Resource loadAsResource(String filename);

    void deleteAll();

    public DocumentMetadata getMetadata(String filename);

    public File getDocument(String filename);

    public byte[] documentToByteArray(File document);

    public String getMimeType(byte[] bytes);

}
