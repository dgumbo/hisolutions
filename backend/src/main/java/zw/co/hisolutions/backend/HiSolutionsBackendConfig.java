package zw.co.hisolutions.backend;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import zw.co.hisolutions.backend.init.InitializeStartData;

@Configuration
public class HiSolutionsBackendConfig {

//    @Value("${spring.profiles.active}") 
//    private static String springProfilesActive;
//
//    //@SuppressWarnings("resource")
//    public HiSolutionsBackendConfig() {        
//        System.out.println("\n\n\n\n\n\n\nzw.co.hisolutions.backend.HiSolutionsBackendApplication.<init>()");
//        System.out.println("Spring Profiles Loaded : " + springProfilesActive + "\n\n\n\n\n\n\n\n\n\n");
//    }
    
    @Bean
    CommandLineRunner init(InitializeStartData initializeStartData) {
        return (args) -> {
            initializeStartData.init();
        };
    }
}
