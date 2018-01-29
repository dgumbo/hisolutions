package zw.co.hisolutions.core.controllers.rest;
 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import zw.co.hisolutions.core.common.basic.controllers.rest.BaseRestController;
import zw.co.hisolutions.core.entity.Technology; 
import zw.co.hisolutions.core.common.basic.service.BasicService;
import zw.co.hisolutions.core.entity.service.TechnologyService;

@RestController
@RequestMapping("/test/technologies")
public class TechnologyController extends BaseRestController<Technology>{
    private final TechnologyService technologyService;
    
    @Autowired
    public TechnologyController(TechnologyService technologyService) {
        this.technologyService = technologyService;        
    }

    @Override
    public BasicService getService() {
        return this.technologyService;
    }

    @Override
    public Class getControllerClass() {
       return this.getClass();
    }

}
