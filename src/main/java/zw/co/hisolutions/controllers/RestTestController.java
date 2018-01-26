package zw.co.hisolutions.controllers;
 
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import zw.co.hisolutions.authentication.entity.User;
import zw.co.hisolutions.security.JwtGenerator;

@RestController
 @RequestMapping("/token")
public class RestTestController { 
    
    @PostMapping("/{username}")
    public String generate(@RequestBody final User user) { //(@PathVariable final String username){
        JwtGenerator jwtGenerator = new JwtGenerator();
        
        return jwtGenerator.generate(user );
    }
    
    @RequestMapping("/rest/helloworld")
    @ResponseBody
    public String helloworld() {
        System.out.println("Pano tasvika ka1!!");
        return "Greetings from Spring Boot!";
    }
 
}
