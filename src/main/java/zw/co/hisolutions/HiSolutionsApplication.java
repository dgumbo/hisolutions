package zw.co.hisolutions;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import zw.co.hisolutions.documents.storage.properties.StorageProperties ;
import zw.co.hisolutions.documents.storage.service.StorageService;

@SpringBootApplication 
@EnableJpaRepositories(basePackages = {"zw.co.hisolutions"})
@EnableConfigurationProperties(StorageProperties.class) 
public class HiSolutionsApplication  implements CommandLineRunner {

    private static final Logger logger = LoggerFactory.getLogger(HiSolutionsApplication.class);
    
//    @Override
//    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
//        return application.sources(HiSolutionsApplication.class);
//    }

    @SuppressWarnings("resource")
    public static void main(String[] args) {
        SpringApplication.run(HiSolutionsApplication.class, args);
    }

    @Bean
    CommandLineRunner init(StorageService storageService) {
        return (args) -> {
            storageService.deleteAll();
            storageService.init();
        };
    }

    @Override
    public void run(String... args) throws Exception {
        logger.info("\n\nApplication Name : {}.\n ",applicationName);
    }
    
    @Value("${application.name}")
    private String applicationName ; 
}
