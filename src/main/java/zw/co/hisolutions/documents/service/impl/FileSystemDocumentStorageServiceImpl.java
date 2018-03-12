package zw.co.hisolutions.documents.service.impl;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.stream.Stream;
import javax.transaction.Transactional; 
import org.apache.tika.Tika;
import org.apache.tika.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.FileSystemUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import zw.co.hisolutions.documents.Status;
import zw.co.hisolutions.documents.entity.DocumentMetadata;
import zw.co.hisolutions.documents.exceptions.StorageException;
import zw.co.hisolutions.documents.exceptions.StorageFileNotFoundException;
import zw.co.hisolutions.documents.service.DocumentMetadataService;
import zw.co.hisolutions.documents.service.FileSystemDocumentStorageService;

/**
 *
 * @author denzil
 */
@Service
public class FileSystemDocumentStorageServiceImpl implements FileSystemDocumentStorageService {

    private final Path rootLocation;
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

        this.rootLocation = Paths.get(pt);
    }

    @Override
    @Transactional
    public DocumentMetadata store(MultipartFile file) {
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

    @Override
    public List<DocumentMetadata> scanServerDirectory() {
        List<DocumentMetadata> documentMetadataList = new ArrayList<>();
        try {
            Stream<Path> filesInDirectory = Files.walk(this.rootLocation, 1)
                    .filter(path -> !path.equals(this.rootLocation))
                    .map(path -> this.rootLocation.relativize(path));

            filesInDirectory.forEach(file -> {
                DocumentMetadata documentMetadata = getMetadata(file.toFile().getName());
                if (documentMetadata == null) {
                    String sp = file.getFileName().toUri().toString();
                     System.out.println("sp : " + sp);
                     File f = new File(sp);
                    String mimeType ="";// tika.detect(documentToByteArray(f));
                    documentMetadata = new DocumentMetadata();
                    documentMetadata.setActiveStatus(true);
                    documentMetadata.setFilename(file.toFile().getName());
                    documentMetadata.setFilePath(this.rootLocation.resolve(file.getFileName()).toString());
                    documentMetadata.setStatus(Status.Success);
                    documentMetadata.setMimeType(mimeType);
                    try {
                        documentMetadata = documentMetadataService.create(documentMetadata);
                    } catch (Exception ex) {
                        Logger.getLogger(FileSystemDocumentStorageServiceImpl.class.getName()).log(Level.SEVERE, null, ex);
                    }
                    documentMetadataList.add(documentMetadata);
                }
            });

            return documentMetadataList;
        } catch (IOException e) {
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
            } else {
                throw new StorageFileNotFoundException(
                        "Could not read file: " + filename);

            }
        } catch (MalformedURLException e) {
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
        } catch (IOException e) {
            throw new StorageException("Could not initialize storage", e);
        }
    }

    @Override
    public DocumentMetadata getMetadata(String filename) {
        return documentMetadataService.getByDocumentName(filename);
    }

    @Override
    public File getDocument(String filename) {
        DocumentMetadata documentMetadata = getMetadata(filename);
        File file = new File(documentMetadata.getFilePath());
        return file;
    }

    @Override
    public byte[] documentToByteArray(File document) {
        // TODO Auto-generated method stub
        byte[] bytes = null;
        try {
            FileInputStream fis = new FileInputStream(document);
            BufferedInputStream inputStream = new BufferedInputStream(fis);
            bytes = IOUtils.toByteArray(inputStream);
        } catch (IOException e) {
            throw new StorageException("Could not convert document", e);
        }
        return bytes;
    }

    @Override
    public String getMimeType(byte[] bytes) {
        return tika.detect(bytes);
    }
}
