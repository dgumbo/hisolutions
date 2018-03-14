//package zw.co.hisolutions.security.controller;
// 
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.ResponseBody;
//import org.springframework.web.bind.annotation.RestController;
//import zw.co.hisolutions.security.authentication.provider.JwtGenerator;
//import zw.co.hisolutions.security.entity.User; 
//
//@RestController
//@RequestMapping("/token")
//public class JwtTokenController { 
//    
//    private JwtGenerator jwtGenerator;
//
//     @Autowired 
//    public  JwtTokenController(JwtGenerator jwtGenerator) {
//        this.jwtGenerator = jwtGenerator;
//    }
//    
//    @PostMapping("")
//    public String generate(@RequestBody final User user) { //(@PathVariable final String username){
//         System.out.println("/token tasvika!!!!!");
//        return jwtGenerator.generate(user );
//    }
//    
//    @RequestMapping("/hello")
//    @ResponseBody
//    public String hello() {
//        System.out.println("\"/test/hello\" tasvika ka1!!");
//        return "Greetings from Spring Boot!";
//    }  
//}
