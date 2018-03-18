package zw.co.hisolutions.storage.service;

import java.io.File;
import java.nio.file.Path;
import java.util.List;
import java.util.stream.Stream;
import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;
import zw.co.hisolutions.documents.entity.DocumentMetadata;

/**
 *
 * @author denzil
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
    
    public byte[] documentToByteArray(File document);

    public List<DocumentMetadata> getAllMetadata();
    
}
