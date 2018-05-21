package zw.co.hisolutions;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import zw.co.hisolutions.init.InitializeStartData;
import zw.co.hisolutions.storage.service.StorageService;

@SpringBootApplication//(scanBasePackages = {"zw.co.hisolutions"})
//@EnableJpaRepositories(basePackages = {"zw.co.hisolutions"})
public class HiSolutionsApplication {
    //@SuppressWarnings("resource")
    public static void main(String[] args) {
        SpringApplication.run(HiSolutionsApplication.class, args);
    }

    @Bean
    CommandLineRunner init(StorageService storageService, InitializeStartData initializeStartData ) {
        return (args) -> {
            //storageService.deleteAll();
            storageService.init();
            storageService.scanServerDirectory();
            initializeStartData.init();
        };
    } 
}