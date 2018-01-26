package zw.co.hisolutions.core.security.controller;

import java.util.Collection;
import java.util.HashSet;

import javax.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView; 
import zw.co.hisolutions.core.security.entity.User;
import zw.co.hisolutions.core.security.entity.UserLogin;
import zw.co.hisolutions.core.security.service.MenuGroupService;
import zw.co.hisolutions.core.security.service.SecurityService;
import zw.co.hisolutions.core.security.service.UserService;

@Controller
@Slf4j
public class LoginController { 
    UserService userService; 
    SecurityService securityService;
    MenuGroupService menuGroupService;    
    
    @Autowired
    public LoginController(UserService userService, SecurityService securityService, MenuGroupService menuGroupService) {
        this.userService = userService;
        this.securityService = securityService;
        this.menuGroupService = menuGroupService;
    }
 

    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public ModelAndView login(ModelAndView model, @ModelAttribute User user) {        
        model.setViewName("index");
        return model;
    }

    @RequestMapping(value = "/roleunit", method = RequestMethod.GET)
    public ModelAndView test(ModelAndView mv, @AuthenticationPrincipal UserLogin userLogin) {
        if (userLogin == null) {
            Collection<? extends GrantedAuthority> authorities = new HashSet<>();
            userLogin = new UserLogin("test", "test", authorities);
        }
        mv.addObject("userLogin", userLogin);
      //  mv.addObject("roleUserUnits", userService.getRoleUserUnitByUserID(userLogin.getUserID()));
        mv.setViewName("roleunit");
        return mv;

    }

    @RequestMapping(value = "/roleunit", method = RequestMethod.POST)
    public ModelAndView roleunit(ModelAndView mv,@AuthenticationPrincipal UserLogin userLogin, HttpServletRequest request) {
        
        String[] roleunit = request.getParameter("roleunit").split("p");
        String unitCode = roleunit[0];
        Long roleID = Long.parseLong(roleunit[1]);
        securityService.updatelogin(userLogin, unitCode, roleID, request);        
        
        log.info("\n\n\n\n\n\nuserLogin:" + userLogin + "\nunitCode:" + unitCode + "\nroleID:" + roleID   + "\n\n\n\n\n\n");
        
        mv.setViewName("redirect:/home");        
        return mv;
        
      //  return "redirect:/home";
    }

    @RequestMapping(value = "/home", method = RequestMethod.GET) 
    public ModelAndView home(@AuthenticationPrincipal UserLogin userLogin, ModelAndView model) {
        model.setViewName("home");
        return model;
    }

}
