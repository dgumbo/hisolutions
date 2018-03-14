package zw.co.hisolutions.documents.storage.properties;

import org.springframework.boot.context.properties.ConfigurationProperties;

/**
 *
 * @author denzil
 */
@ConfigurationProperties("storage")
public class StorageProperties {
     /**
     * Folder location for storing files
     */
    
    private String location = "upload-dir";

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }
}
