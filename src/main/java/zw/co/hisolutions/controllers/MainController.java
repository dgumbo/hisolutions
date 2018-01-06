package zw.co.hisolutions.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class MainController {

    @RequestMapping("/")
    public ModelAndView indexMapping(ModelAndView mv) {
        System.out.println("Pano tasvika!!");
        mv.setViewName("index");
        return mv;
    }
    
    @RequestMapping("/t")
    @ResponseBody
    public String index() {
        System.out.println("Pano tasvika ka1!!");
        return "Greetings from Spring Boot!";
    }

}
