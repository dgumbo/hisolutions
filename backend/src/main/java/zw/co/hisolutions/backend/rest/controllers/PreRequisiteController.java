package zw.co.hisolutions.backend.rest.controllers;
 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import zw.co.hisolutions.common.controllers.rest.BasicRestController;
import zw.co.hisolutions.backend.core.entity.PreRequisite;
import zw.co.hisolutions.backend.core.service.PreRequisiteService; 
import zw.co.hisolutions.common.service.GenericService;

@RestController
@RequestMapping("/rest/prerequisites")
public class PreRequisiteController extends BasicRestController<PreRequisite, Long>{

    private final  PreRequisiteService preRequisiteService;
    
    @Autowired
    public PreRequisiteController  (PreRequisiteService preRequisiteService) {
        this.preRequisiteService = preRequisiteService;        
    }

    @Override
    public GenericService getService() {
        return this.preRequisiteService;
    }

    @Override
    public Class getControllerClass() {
       return this.getClass();
    }

}
