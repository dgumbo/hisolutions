package zw.co.hisolutions.backend.storage.service.impl;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.logging.Level;
import java.util.stream.Stream;
import org.apache.tika.Tika;
import org.apache.tika.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.FileSystemUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import zw.co.hisolutions.backend.storage.entity.Status;
import zw.co.hisolutions.backend.storage.entity.DocumentMetadata;
import zw.co.hisolutions.backend.storage.exceptions.StorageException;
import zw.co.hisolutions.backend.storage.exceptions.StorageFileNotFoundException;
import zw.co.hisolutions.backend.storage.properties.StorageProperties;
import zw.co.hisolutions.backend.storage.service.DocumentMetadataService;
import zw.co.hisolutions.backend.storage.service.StorageService;

/**
 *
 * @author dgumbo
 */
@Service
public class StorageServiceImpl implements StorageService {

    private final Path rootLocation;
    private final DocumentMetadataService documentMetadataService;
    private final Tika tika = new Tika();

    @Autowired
    public StorageServiceImpl(StorageProperties properties, DocumentMetadataService documentMetadataService) {
        this.rootLocation = Paths.get(properties.getLocation());
        this.documentMetadataService = documentMetadataService;
    }

    @Override
    public Stream<Path> loadAll() {
        try {
            return Files.walk(this.rootLocation, 1)
                    .filter(path -> !path.equals(this.rootLocation))
                    .map(path -> this.rootLocation.relativize(path));
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
    public String getStorageLocation() {
        return rootLocation.toString();
    }

    @Override
    @Transactional
    public DocumentMetadata store(MultipartFile file) {
        System.out.println("Starting Save");
        String filename = StringUtils.cleanPath(file.getOriginalFilename());
        if (file.isEmpty()) {
            throw new StorageException("Failed to store empty file " + filename);
        }

        DocumentMetadata documentMetadata = null;
        try {
            documentMetadata = getMetadata(filename);
            if (documentMetadata != null) {
                documentMetadata.setStatus(Status.DocumentAlreadyExists);
            } else {
                documentMetadata = new DocumentMetadata();

                if (filename.contains("..")) {
                    // This is a security check
                    throw new StorageException("Cannot store file with relative path outside current directory " + filename);
                }

                System.out.println("this.rootLocation.resolve(filename) : " + this.rootLocation.resolve(filename));
                Files.copy(file.getInputStream(), this.rootLocation.resolve(filename),
                        StandardCopyOption.REPLACE_EXISTING);

                String mimeType = tika.detect(file.getBytes());

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
            java.util.logging.Logger.getLogger(StorageServiceImpl.class.getName()).log(Level.SEVERE, null, ex);
            throw new StorageException("Failed to store file " + filename, ex);
        }

        System.out.println("Finishing Save");
        return documentMetadata;
    }

    public DocumentMetadata getMetadata(String filename) {
        return documentMetadataService.getByDocumentName(filename);
    }

    @Override
    public void scanServerDirectory() {
        try {
            Stream<Path> filesInDirectory = Files.walk(this.rootLocation, 1)
                    .filter(path -> !path.equals(this.rootLocation))
                    .map(path -> this.rootLocation.relativize(path));

            filesInDirectory.forEach(file -> {
                DocumentMetadata documentMetadata = getMetadata(file.toFile().getName());
                if (documentMetadata == null) {
                    Path filePath = rootLocation.resolve(file); 

                    String mimeType;
                    try {
                        mimeType = tika.detect(filePath);
                    } catch (IOException ex) {
                        mimeType = "";
                        java.util.logging.Logger.getLogger(StorageServiceImpl.class.getName()).log(Level.SEVERE, null, ex);
                    }

                    documentMetadata = new DocumentMetadata();
                    documentMetadata.setActiveStatus(true);
                    documentMetadata.setFilename(file.toFile().getName());
                    documentMetadata.setFilePath(this.rootLocation.resolve(file.getFileName()).toString());
                    documentMetadata.setStatus(Status.Success);
                    documentMetadata.setMimeType(mimeType);
                    try {
                        documentMetadataService.create(documentMetadata);
                    } catch (Exception ex) {
                        java.util.logging.Logger.getLogger(StorageServiceImpl.class.getName()).log(Level.SEVERE, null, ex);
                    }
                }
            });
        } catch (IOException e) {
            throw new StorageException("Failed to read stored files", e);
        }
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
    public List<DocumentMetadata> getAllMetadata() {
        return documentMetadataService.findAll();
    }

    @Override
    public String getMimeType(byte[] bytes) {
        return tika.detect(bytes);
    }

    @Override
    public String getMimeType(Resource file) throws IOException {
        InputStream inputStream = file.getInputStream();
        return tika.detect(inputStream);
    }
}
