package zw.co.hisolutions.backend.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 *
 * @author dgumbo
 */
@Controller
public class NgController {
    @GetMapping(value = "/#/{path:[^\\.]*}")
    public String redirect() {
        System.out.println("zw.co.hisolutions.backend.controllers.NgController.redirect()");
        return "forward:/";
    }
}
