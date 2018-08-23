package zw.co.hisolutions.storage;

import com.amazonaws.auth.InstanceProfileCredentialsProvider;
import com.amazonaws.auth.profile.ProfileCredentialsProvider;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.transfer.TransferManager;
import com.amazonaws.services.s3.transfer.TransferManagerBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import zw.co.hisolutions.storage.properties.StorageProperties;
import zw.co.hisolutions.storage.service.StorageService;

@Configuration
public class StorageServicesConfiguration {
    private final String clientRegion;
    
    @Autowired
    public StorageServicesConfiguration(StorageProperties properties) {
        clientRegion = properties.getAwsRegion();
    }

    @Bean
    CommandLineRunner initLocalStorage(StorageService storageService) {
        //, InitializeStartData initializeStartData ) {
        System.out.println("\n\nzw.co.hisolutions.storage.StorageServicesConfiguration.initLocalStorage()");
        System.out.println("Initializing Local Storage !!!!! \n\n");
        return (args) -> {
            //storageService.deleteAll();
           storageService.init();
           storageService.scanServerDirectory(); 
        };
    } 

    @Bean//("transferManagerTestEnvironment")
    @Profile("test")
    TransferManager transferManagerTestEnvironment() {
        AmazonS3 s3ClientTestEnvironment = AmazonS3ClientBuilder.standard()
                .withRegion(clientRegion)
                .withCredentials(new ProfileCredentialsProvider())
                .build();
        
        TransferManager transferManager = TransferManagerBuilder.standard()
                .withS3Client(s3ClientTestEnvironment)
                .build();
        return transferManager;
    }

    @Bean 
    @Profile("production")
    TransferManager transferManagerProductionEnvironment() {
        AmazonS3 s3ClientProductionEnvironment = AmazonS3ClientBuilder.standard()
                .withRegion(clientRegion)
                .withCredentials(new InstanceProfileCredentialsProvider(false))
                .build();
        
        TransferManager transferManager = TransferManagerBuilder.standard()
                .withS3Client(s3ClientProductionEnvironment)
                .build();
        return transferManager;
    }
}
