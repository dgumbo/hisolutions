package zw.co.hisolutions.documents.service.impl;

import java.io.File;
import java.net.MalformedURLException;
import java.nio.file.Path;
import org.apache.tika.Tika;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import zw.co.hisolutions.documents.entity.DocumentMetadata;
import zw.co.hisolutions.documents.exceptions.NullFilenameException; 
import zw.co.hisolutions.documents.service.DocumentMetadataService;
import zw.co.hisolutions.documents.service.FileSystemDocumentStorageService;
import zw.co.hisolutions.storage.exceptions.StorageFileNotFoundException;

/**
 *
 * @author denzil
 */
@Service
public class FileSystemDocumentStorageServiceImpl implements FileSystemDocumentStorageService {

    private final DocumentMetadataService documentMetadataService;
    Tika tika = new Tika();

    @Autowired
    public FileSystemDocumentStorageServiceImpl(DocumentMetadataService documentMetadataService) {
        this.documentMetadataService = documentMetadataService;
//        System.err.println("\n\n\n\n\n\n\n\n\nproperties.getLocation() : " + properties.getLocation() + "\n\n\n\n\n\n\n\n\n\n");
//        System.err.println("\n\n\n\n\n\n\n\n\nproperties.getLocation() : " + properties.toString() + "\n\n\n\n\n\n\n\n\n\n");

        // Creating the directory to store file
        String rootPath = System.getProperty("catalina.home");

        String pt = rootPath + File.separator + "document_store";

        File dir = new File(pt);
        if (!dir.exists()) {
            dir.mkdirs();
        }

    } 

    @Override
    public Resource loadAsResource(String filename) {
        try {
            Path file = null; //load(filename);
            Resource resource = new UrlResource(file.toUri());
            if (resource.exists() || resource.isReadable()) {
                return resource;
            } else {
                throw new StorageFileNotFoundException(
                        "Could not read file: " + filename);

            }
        } catch (MalformedURLException e) {
            throw new StorageFileNotFoundException("Could not read file: " + filename, e);
        }
    } 

    @Override
    public DocumentMetadata getMetadata(String filename) {
        return documentMetadataService.getByDocumentName(filename);
    }

    @Override
    public File getDocument(String filename) throws NullPointerException {
        System.out.println("filename : " + (filename == null ? "null." : filename));
        try {
            DocumentMetadata documentMetadata = getMetadata(filename);
            File file = new File(documentMetadata.getFilePath());
            return file;
        } catch (NullPointerException e) {
            throw new NullFilenameException("Filename Supplied is null.", e);
        }
    }

 
}
