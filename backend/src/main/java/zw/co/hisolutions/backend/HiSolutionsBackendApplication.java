package zw.co.hisolutions.backend;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.core.env.Environment;  
import zw.co.hisolutions.backend.init.InitializeStartData;
import zw.co.hisolutions.storage.StorageServicesComponent;
import zw.co.hisolutions.auth.jwt.JwtAuthModuleComponent;

@SpringBootApplication(scanBasePackages = {"zw.co.hisolutions"})
@JwtAuthModuleComponent
@StorageServicesComponent
public class HiSolutionsBackendApplication {
    //@SuppressWarnings("resource")
    public static void main(String[] args) {
        SpringApplication.run(HiSolutionsBackendApplication.class, args);
    }
 
    @Bean
    CommandLineRunner testForEnvironmentVariables(Environment environment) {
        com.microsoft.sqlserver.jdbc.SQLServerDriver sqlDriver;
        com.mysql.cj.jdbc.Driver mySqlDriver;
        
        return (args) -> {
            System.out.println("\n\n"); 
            System.out.println("SPRING_PROFILES_ACTIVE-: " + environment.getProperty("SPRING_PROFILES_ACTIVE"));
            System.out.println("AWS_REGION-: " + environment.getProperty("AWS_REGION"));
            System.out.println("AWS_S3_HISOLUTIONS_STORAGE_BUCKET_NAME-: " + environment.getProperty("AWS_S3_HISOLUTIONS_STORAGE_BUCKET_NAME"));
            System.out.println("AWS_ACCESS_KEY_ID-: " + environment.getProperty("AWS_ACCESS_KEY_ID"));
            System.out.println("");
            System.out.println("JWT_HEADER-: " + environment.getProperty("JWT_HEADER"));
            System.out.println("\n\n");
        };
    }
 
    @Bean
    CommandLineRunner initStartData(InitializeStartData initializeStartData) {
        return (args) -> {
            initializeStartData.init();
        };
    }
}
