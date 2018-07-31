package zw.co.hisolutions.backend;
 
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import zw.co.hisolutions.auth.AuthenticationModuleComponent;
import zw.co.hisolutions.storage.StorageServicesModuleComponent;

@SpringBootApplication(scanBasePackages = {"zw.co.hisolutions"})
@AuthenticationModuleComponent
@StorageServicesModuleComponent
public class HiSolutionsBackendApplication { 
    //@SuppressWarnings("resource")
    public static void main(String[] args) {
        SpringApplication.run(HiSolutionsBackendApplication.class, args);
    }
}
