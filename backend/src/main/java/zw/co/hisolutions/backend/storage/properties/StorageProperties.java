package zw.co.hisolutions.backend.storage.properties;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

/**
 *
 * @author denzil
 */
@Configuration
@ConfigurationProperties("storage")
public class StorageProperties {
     /**
     * Folder location for storing files
     */
    
    @Value("${server.upload.dir}")
    private String location ;

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }
}
