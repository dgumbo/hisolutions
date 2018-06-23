package zw.co.hisolutions.backend.rest.controllers;
 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import zw.co.hisolutions.common.controllers.rest.BasicRestController;
import zw.co.hisolutions.backend.core.entity.Technology;
import zw.co.hisolutions.backend.core.service.TechnologyService;
import zw.co.hisolutions.common.service.GenericService;

@RestController
@RequestMapping("/rest/technologies")
public class TechnologyController extends BasicRestController<Technology, Long>{
    private final TechnologyService technologyService;
    
    @Autowired
    public TechnologyController(TechnologyService technologyService) {
        this.technologyService = technologyService;        
    }

    @Override
    public GenericService getService() {
        return this.technologyService;
    }

    @Override
    public Class getControllerClass() {
       return this.getClass();
    }

}
