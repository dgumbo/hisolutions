package zw.co.hisolutions.backend.controllers;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import zw.co.hisolutions.auth.entity.UserRole;
import zw.co.hisolutions.auth.entity.User;
import zw.co.hisolutions.auth.service.UsersService;

/**
 *
 * @author dgumbo
 */
@Controller
public class TestJSPController {
    @Autowired
    UsersService userService;
    
    @GetMapping("/home")
    public ModelAndView IndexJspSpring(HttpServletRequest request, ModelAndView model, Principal principal, Authentication auth){
        System.out.println("zw.co.hisolutions.auth.controllers.JSPController.IndexJspSpring()");
        
        //Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        
        model.addObject("uri", request.getRequestURI()) ;
        if (principal != null && principal.getName() != null) model.addObject("user", principal.getName()) ; 
        if (auth != null && auth.getAuthorities() != null)  model.addObject("roles", auth.getAuthorities());
        
//        System.out.println("uri : " + request.getRequestURI());
//        System.out.println("user : " + auth.getName());
//        System.out.println("roles : " + auth.getAuthorities().size());
//        auth.getAuthorities().forEach(a -> {
//            System.out.println("role : " + a.getAuthority());
//        });
        
        model.setViewName("jsp-spring");
        return model;
    }
    
    @GetMapping("/admin")
    public String admin(ModelAndView model){
        System.out.println("zw.co.hisolutions.securitypractice.controller.JSPController.admin()");
        return "admin/admin";
    }
     

    @ResponseBody
    @GetMapping("/t")
    public String test(CsrfToken csrf) {

        String returnString = "<p>Test Succesiful</p>";
        returnString += "<p><a href=\"/home\">Home Page</a></p>";
        returnString += "<form action='logout' method='post'>";
        returnString += "<input type='submit' value='logout' />";
        returnString += csrf == null ? "" : "<input type='hidden' name='" + csrf.getParameterName() + "' value='" + csrf.getToken() + "' />";
        returnString += "</form>";

        return returnString;
    } 
    
    @GetMapping("/init/users")
    @ResponseBody
    public String init(){
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        
        List <UserRole> userAuthorities = new ArrayList(); 
        UserRole userAuth = userService.createAuthority(new UserRole("USER"));
        userAuthorities.add(userAuth);
         
        User user = new User();
        user.setActiveStatus(true);
        user.setEnabled(true);
        user.setPassword(encoder.encode("user"));
        user.setUsername("user");
        user.setRoles(userAuthorities);
        userService.createUser(user);
                
        User admin = new User();
        admin.setActiveStatus(true);
        admin.setEnabled(true);
        admin.setPassword(encoder.encode("admin"));
        admin.setUsername("admin");
        
        List <UserRole> adminAuthorities = new ArrayList(); 
        UserRole authorityADMIN = userService.createAuthority(new UserRole("ADMIN"));
        adminAuthorities.add(userAuth);
        adminAuthorities.add(authorityADMIN);
        admin.setRoles(adminAuthorities);
        userService.createUser(admin);
        
        return "Successiful";
    }
}
