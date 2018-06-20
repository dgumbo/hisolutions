package zw.co.hisolutions.backend;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean; 
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Import; 
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import zw.co.hisolutions.auth.AuthenticationModuleApplication; 
import zw.co.hisolutions.auth.AuthenticationModuleComponent;
import zw.co.hisolutions.backend.init.InitializeStartData;
import zw.co.hisolutions.backend.storage.service.StorageService;

@SpringBootApplication(scanBasePackages = {"zw.co.hisolutions"})
@ComponentScan (basePackages = "zw.co.hisolutions")
@EnableJpaRepositories(basePackages = {"zw.co.hisolutions"})
//@Import ( AuthenticationModuleApplication.class ) 
@AuthenticationModuleComponent
public class HiSolutionsBackendApplication {
    //@SuppressWarnings("resource")
    public static void main(String[] args) {
        SpringApplication.run(HiSolutionsBackendApplication.class, args);
    }

    @Bean
    CommandLineRunner init(StorageService storageService, InitializeStartData initializeStartData ) {
        return (args) -> {
            //storageService.deleteAll();
            storageService.init();
            //storageService.scanServerDirectory();
            //initializeStartData.init();
            
            //FormsSecurityConfig test;
        };
    } 
    
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}