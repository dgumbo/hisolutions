package zw.co.hisolutions;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.view.InternalResourceViewResolver;
import org.springframework.web.servlet.view.JstlView;


@Configuration
public class MvcConfiguration {

    @Bean
    public InternalResourceViewResolver setupViewResolver()  {
        InternalResourceViewResolver resolver =  new InternalResourceViewResolver();
        resolver.setPrefix ("/WEB-INF/html/");
        resolver.setSuffix (".html");
        resolver.setViewClass (JstlView.class);
        return resolver;
    }
}
