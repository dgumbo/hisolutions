package zw.co.hisolutions.auth.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController; 
import zw.co.hisolutions.auth.entity.User;
import zw.co.hisolutions.auth.jwt.util.JwtUtil;
import zw.co.hisolutions.auth.service.UserAndRoleService;

/**
 *
 * @author dgumbo
 */
@RestController
@RequestMapping("/token")
public class TokenController {
    
    private final UserAndRoleService userService;
    private final JwtUtil util;

    @Autowired
    public TokenController(UserAndRoleService userService, JwtUtil util) {
        this.userService = userService;
        this.util = util ;
    }  
    
    @PostMapping("/generate")
    public String generateToken(@RequestBody final User user){
        System.out.println("zw.co.hisolutions.auth.jwtsecurity.controllers.TokenController.generate()");
        //User user = userService.getUserByUsername(username);
        user.getRoles().forEach(action ->  {
            System.out.println("Role : " + action.getRole());
        });
        
        String token = util.generateToken(user);
        
        return token;        
    } 
    
    @GetMapping("/test")
    public List<User> testToken(){
        System.out.println("zw.co.hisolutions.auth.jwtsecurity.controllers.TokenController.generate()");
        //User user = userService.getUserByUsername(username);
        
        return userService.findAll();        
    } 
}