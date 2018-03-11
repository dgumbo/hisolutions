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
    private DurationService durationService;
    private DurationTypeService durationTypeService;
    private DistributionMethodService distributionMethodService;
    private GenericService genericService;
    
    @Autowired
    public MainController(GenericService<Audiance, Long> genericService, DistributionMethodService distributionMethodService, DurationService durationService, DurationTypeService durationTypeService) {
        this.durationService = durationService;
        this.durationTypeService = durationTypeService;
        this.distributionMethodService = distributionMethodService;
        this.genericService = genericService;
    }

    @Autowired InitializeStartData initializeStartData;
    
    @RequestMapping("/")
    public ModelAndView indexMapping(ModelAndView mv) {
        System.out.println("Pano tasvika!!");
        
        //   initializeStartData.init();
        
        mv.setViewName("index.html");
        return mv;
    }
    
    @RequestMapping("/t")
    @ResponseBody
    public String index() {
        System.out.println("Pano tasvika ka1!!");
        return "Greetings from Spring Boot!";
    }

}
