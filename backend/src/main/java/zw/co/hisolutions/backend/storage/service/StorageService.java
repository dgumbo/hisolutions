package zw.co.hisolutions.backend.storage.service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.util.List;
import java.util.stream.Stream;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.web.multipart.MultipartFile;
import zw.co.hisolutions.backend.storage.entity.DocumentMetadata;

/**
 *
 * @author dgumbo
 */
public interface StorageService {

    void init();

    Stream<Path> loadAll();

    Path load(String filename);

    Resource loadAsResource(String filename);

    void deleteAll();
    
    String getStorageLocation();

    DocumentMetadata store(MultipartFile file);
    
    void scanServerDirectory();
    
    byte[] documentToByteArray(File document);

    List<DocumentMetadata> getAllMetadata();

    String getMimeType(byte[] bytes);
    String getMimeType(Resource file) throws IOException;
}
