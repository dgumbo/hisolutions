package zw.co.hisolutions.backend;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.core.annotation.Order;
import org.springframework.core.env.Environment;
import zw.co.hisolutions.auth.AuthenticationModuleComponent;
import zw.co.hisolutions.backend.init.InitializeStartData;
import zw.co.hisolutions.storage.StorageServicesComponent;

@SpringBootApplication(scanBasePackages = {"zw.co.hisolutions"})
@AuthenticationModuleComponent
@StorageServicesComponent
public class HiSolutionsBackendApplication {
    //@SuppressWarnings("resource")
    public static void main(String[] args) {
        SpringApplication.run(HiSolutionsBackendApplication.class, args);
    }
 
    @Bean
    CommandLineRunner testForEnvironmentVariables(Environment environment) {
        return (args) -> {
            System.out.println("\n\n\n"); 
            System.out.println("SPRING_PROFILES_ACTIVE-: " + environment.getProperty("SPRING_PROFILES_ACTIVE"));
            System.out.println("AWS_REGION-: " + environment.getProperty("AWS_REGION"));
            System.out.println("AWS_S3_HISOLUTIONS_STORAGE_BUCKET_NAME-: " + environment.getProperty("AWS_S3_HISOLUTIONS_STORAGE_BUCKET_NAME"));
            System.out.println("AWS_ACCESS_KEY_ID-: " + environment.getProperty("AWS_ACCESS_KEY_ID"));
            System.out.println("\n\n\n");
        };
    }
 
    @Bean
    CommandLineRunner init(InitializeStartData initializeStartData) {
        return (args) -> {
            initializeStartData.init();
        };
    }
}
