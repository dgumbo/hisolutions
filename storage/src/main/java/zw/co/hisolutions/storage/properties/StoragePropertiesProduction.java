package zw.co.hisolutions.storage.properties;

import lombok.Data;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

/**
 *
 * @author denzil
 */
@Configuration
//@ConfigurationProperties("storage")
@Data
@Profile("production")
public class StoragePropertiesProduction  implements StorageProperties{
    private String location = null;
    
    @Value("${aws.region}")
    private String awsRegion;
    
    @Value("${aws.s3.bucket.name}")
    private String awsS3BucketName;
     
    private String awsAccessKeyId = null;     
    private String awsSecretAccessKey = null;      
}
