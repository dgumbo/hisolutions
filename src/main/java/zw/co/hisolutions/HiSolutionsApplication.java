package zw.co.hisolutions;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
//import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
//import zw.co.hisolutions.documents.StorageProperties;

@SpringBootApplication(scanBasePackages = {"zw.co.hisolutions"})
@EnableJpaRepositories(basePackages = {"zw.co.hisolutions"})
@EnableAutoConfiguration
//@EnableConfigurationProperties(StorageProperties.class)
@ComponentScan(basePackages = {"zw.co.hisolutions"})
public class HiSolutionsApplication extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(HiSolutionsApplication.class);
    }

    @SuppressWarnings("resource")
    public static void main(String[] args) {
        SpringApplication.run(HiSolutionsApplication.class, args);
    }
}