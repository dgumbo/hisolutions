package zw.co.hisolutions.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import zw.co.hisolutions.core.common.basic.service.GenericService;
import zw.co.hisolutions.core.entity.Audiance;
import zw.co.hisolutions.core.service.DistributionMethodService;
import zw.co.hisolutions.core.service.DurationService;
import zw.co.hisolutions.core.service.DurationTypeService;
import zw.co.hisolutions.init.InitializeStartData;

@Controller
public class MainController {

    private final InitializeStartData initializeStartData;

    @Autowired
    public MainController(InitializeStartData initializeStartData) {
       this.initializeStartData = initializeStartData;
    }
 

    @RequestMapping("/")
    public ModelAndView indexMapping(ModelAndView mv) {
        System.out.println("Pano tasvika!!");

        //   initializeStartData.init();
        mv.setViewName("index.html");
        return mv;
    }

    @RequestMapping("/init")
    public @ResponseBody
    String init() {
        System.out.println("Now Initializing Initial Data!!");

        initializeStartData.init();

        System.out.println("Initial Data Initialized Successifully !!");

        return "Initial Data Initialized Successifully !!";
    }

    @RequestMapping("/t")
    @ResponseBody
    public String index() {
        System.out.println("Pano tasvika ka1!!");
        return "Greetings from Spring Boot!";
    }

}
