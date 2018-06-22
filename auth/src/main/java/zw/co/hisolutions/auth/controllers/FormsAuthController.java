package zw.co.hisolutions.auth.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 *
 * @author dgumbo
 */
@Controller
public class FormsAuthController {  
     
    @GetMapping("/login")
    public String login2( ModelAndView model ) {
        System.out.println("zw.co.hisolutions.controllers.SecurityController.login2()");
         
        return "auth/login";
    }
     
    @GetMapping("/logout")
    public ModelAndView logout( ModelAndView model ) {
        System.out.println("zw.co.hisolutions.controllers.SecurityController.logout()");
        
        model.setViewName("auth/logout");
        return model;
    }
    
}
