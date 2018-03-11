package zw.co.hisolutions;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder; 
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan; 
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages = {"zw.co.hisolutions"})
@EnableJpaRepositories(basePackages = {"zw.co.hisolutions"})
@EnableAutoConfiguration
//@EnableConfigurationProperties(StorageProperties.class)
@ComponentScan(basePackages = {"zw.co.hisolutions"})
public class HiSolutionsApplication extends SpringBootServletInitializer {

    private static final Logger logger = LoggerFactory.getLogger(HiSolutionsApplication.class);
    
    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(HiSolutionsApplication.class);
    }

    @SuppressWarnings("resource")
    public static void main(String[] args) {
        SpringApplication.run(HiSolutionsApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        logger.info("\n\nApplication Name : {},\n Username : {}\n",applicationName,username);
    }
    
    @Value("${application.name}")
    private String applicationName ;
    
    @Value("${username}")
    private String username ;
}
