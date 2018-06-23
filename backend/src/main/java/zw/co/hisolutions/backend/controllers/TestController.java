package zw.co.hisolutions.backend.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 *
 * @author dgumbo
 */
@Controller
public class TestController {
    
    @GetMapping("/h")
    public String HomeMapping(){
        System.out.println("zw.co.hisolutions.backend.controllers.TestController.HomeMapping()");
        return "index";
    }
}
