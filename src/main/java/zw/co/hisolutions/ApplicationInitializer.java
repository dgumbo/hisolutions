package zw.co.hisolutions;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRegistration;
import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.servlet.DispatcherServlet;

    /*
https://docs.spring.io/spring-boot/docs/current/api/org/springframework/boot/web/support/SpringBootServletInitializer.html
    this is already implemented on HisSolutionsApplication
    */
public class ApplicationInitializer   {
//        implements WebApplicationInitializer {
//
//    @Override
//    public void onStartup(ServletContext container) throws ServletException {
//
//        AnnotationConfigWebApplicationContext ctx = new AnnotationConfigWebApplicationContext();
//        ctx.setServletContext(container);
//        ServletRegistration.Dynamic servlet = container.addServlet("dispatcher", new DispatcherServlet(ctx));
//        servlet.setLoadOnStartup(1);
//        servlet.addMapping("/");
//    }
}