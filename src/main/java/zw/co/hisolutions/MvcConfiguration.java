package zw.co.hisolutions;
//
//import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
//import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
//import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;
//import org.springframework.web.servlet.view.InternalResourceViewResolver;
//
@Configuration
public class MvcConfiguration extends WebMvcConfigurationSupport {

//    @Bean
//    public InternalResourceViewResolver setupViewResolver() {
//        InternalResourceViewResolver resolver = new InternalResourceViewResolver();
//        //resolver.set
//        resolver.setPrefix("");
//        resolver.setSuffix("");
//        //resolver.setViewClass (JstlView.class);
//        //resolver.setViewClass (mvc. HTMLView.class);
//        //resolver.setViewClass(viewClass); //setTemplateMode("HTML5"); 
//        return resolver;
//    }
//
////	@Bean
////	@Description("Thymeleaf Template Resolver")
////	public ServletContextTemplateResolver templateResolver() {
////	    ServletContextTemplateResolver templateResolver = new ServletContextTemplateResolver();
////	    templateResolver.setPrefix("/WEB-INF/html/");
////	    templateResolver.setSuffix(".html");
////	    templateResolver.setTemplateMode("HTML5");
////	 
////	    return templateResolver;
////	}
////    @Override
////    public void addResourceHandlers(ResourceHandlerRegistry registry) {
////        registry.addResourceHandler("**").addResourceLocations("/WEB-INF/html/");
////        //registry.addResourceHandler("**").addResourceLocations("/templates/");
////        //registry.addResourceHandler("/WEB-INF/app/**").addResourceLocations("/app/build/");
////    }
//    @Override
//    public void addViewControllers(final ViewControllerRegistry registry) {
//        super.addViewControllers(registry);
//        registry.addViewController("/**").setViewName("forward:/");
//    }
//
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedMethods("HEAD", "GET", "PUT", "POST", "DELETE", "PATCH");
    }
}
