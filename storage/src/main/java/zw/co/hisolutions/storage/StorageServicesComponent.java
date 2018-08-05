package zw.co.hisolutions.storage;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
 

@Configuration 
@ComponentScan (basePackages = "zw.co.hisolutions.auth")
public @interface StorageServicesComponent {
   
}
