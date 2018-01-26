package zw.co.hisolutions.core.security.controller;
 
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import zw.co.hisolutions.core.security.entity.User; 

@RestController
@RequestMapping("/rest")
public class RestTestController {  
    
    @PostMapping("")
    public String generate(@RequestBody final User user) { //(@PathVariable final String username){
         System.out.println("/token tasvika!!!!!");
        return "/token tasvika!!!!!" ;
    } 
    
    @RequestMapping("/helloworld")
    @ResponseBody
    public String helloworld() {
        System.out.println("\"/rest/helloworld\" tasvika ka1!!");
        return "Greetings from Spring Boot!";
    }
    
 
}
