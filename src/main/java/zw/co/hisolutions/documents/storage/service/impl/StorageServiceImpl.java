package zw.co.hisolutions.documents.storage.service.impl;

import zw.co.hisolutions.documents.storage.service.StorageService; 
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.stream.Stream;
import org.apache.tika.Tika;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.FileSystemUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile; 
import zw.co.hisolutions.documents.Status;
import zw.co.hisolutions.documents.entity.DocumentMetadata;
import zw.co.hisolutions.documents.service.DocumentMetadataService;
import zw.co.hisolutions.documents.service.impl.FileSystemDocumentStorageServiceImpl;
import zw.co.hisolutions.documents.storage.exceptions.StorageException;
import zw.co.hisolutions.documents.storage.exceptions.StorageFileNotFoundException;
import zw.co.hisolutions.documents.storage.properties.StorageProperties;

/**
 *
 * @author denzil
 */
@Service
public class StorageServiceImpl implements StorageService{
    private final Path rootLocation; 
    private final DocumentMetadataService documentMetadataService;
    Tika tika = new Tika(); 

    @Autowired
    public StorageServiceImpl(StorageProperties properties, DocumentMetadataService documentMetadataService) {
        this.rootLocation = Paths.get(properties.getLocation());
        this.documentMetadataService = documentMetadataService;
    }

    @Override
    public void store(MultipartFile file) {
        String filename = StringUtils.cleanPath(file.getOriginalFilename());
        try {
            if (file.isEmpty()) {
                throw new StorageException("Failed to store empty file " + filename);
            }
            if (filename.contains("..")) {
                // This is a security check
                throw new StorageException(
                        "Cannot store file with relative path outside current directory "
                                + filename);
            }
            Files.copy(file.getInputStream(), this.rootLocation.resolve(filename),
                    StandardCopyOption.REPLACE_EXISTING);
        }
        catch (IOException e) {
            throw new StorageException("Failed to store file " + filename, e);
        }
    }

    @Override
    public Stream<Path> loadAll() {
        try {
            return Files.walk(this.rootLocation, 1)
                    .filter(path -> !path.equals(this.rootLocation))
                    .map(path -> this.rootLocation.relativize(path));
        }
        catch (IOException e) {
            throw new StorageException("Failed to read stored files", e);
        }

    }

    @Override
    public Path load(String filename) {
        return rootLocation.resolve(filename);
    }

    @Override
    public Resource loadAsResource(String filename) {
        try {
            Path file = load(filename);
            Resource resource = new UrlResource(file.toUri());
            if (resource.exists() || resource.isReadable()) {
                return resource;
            }
            else {
                throw new StorageFileNotFoundException(
                        "Could not read file: " + filename);

            }
        }
        catch (MalformedURLException e) {
            throw new StorageFileNotFoundException("Could not read file: " + filename, e);
        }
    }

    @Override
    public void deleteAll() {
        FileSystemUtils.deleteRecursively(rootLocation.toFile());
    }

    @Override
    public void init() {
        try {
            Files.createDirectories(rootLocation);
        }
        catch (IOException e) {
            throw new StorageException("Could not initialize storage", e);
        }
    }

    @Override
    public String getStorageLocation() {
        return rootLocation.toString();
    }

    @Override
    public DocumentMetadata storeFile(MultipartFile file) {
    
        String filename = StringUtils.cleanPath(file.getOriginalFilename());
        DocumentMetadata documentMetadata;
        try {
            documentMetadata = getMetadata(filename);
            if (documentMetadata != null) {
                documentMetadata.setStatus(Status.DocumentAlreadyExists);
            } else {
                if (file.isEmpty()) {
                    throw new StorageException("Failed to store empty file " + filename);
                }

                if (filename.contains("..")) {
                    // This is a security check
                    throw new StorageException("Cannot store file with relative path outside current directory " + filename);
                }

                System.out.println("this.rootLocation.resolve(filename) : " + this.rootLocation.resolve(filename));
                Files.copy(file.getInputStream(), this.rootLocation.resolve(filename),
                        StandardCopyOption.REPLACE_EXISTING);

                String mimeType = tika.detect(file.getBytes());

                documentMetadata = new DocumentMetadata();
                documentMetadata.setActiveStatus(true);
                documentMetadata.setFilename(filename);
                documentMetadata.setFilePath(this.rootLocation.resolve(filename).toString());
                documentMetadata.setStatus(Status.Success);
                documentMetadata.setMimeType(mimeType);
                documentMetadata = documentMetadataService.create(documentMetadata);
            }

        } catch (IOException e) {
            throw new StorageException("Failed to store file " + filename, e);
        } catch (Exception ex) {
            Logger.getLogger(FileSystemDocumentStorageServiceImpl.class.getName()).log(Level.SEVERE, null, ex);
            throw new StorageException("Failed to store file " + filename, ex);
        }

        return documentMetadata;
    }
    
    
 
    public String getMimeType(byte[] bytes) {
        return tika.detect(bytes);
    }
    
    public DocumentMetadata getMetadata(String filename) {
        return documentMetadataService.getByDocumentName(filename);
    }
}
