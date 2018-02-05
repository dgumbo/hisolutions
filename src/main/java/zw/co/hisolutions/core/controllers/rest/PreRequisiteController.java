package zw.co.hisolutions.core.controllers.rest;
 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import zw.co.hisolutions.core.common.basic.controller.rest.BasicRestController;
import zw.co.hisolutions.core.entity.PreRequisite;
import zw.co.hisolutions.core.service.PreRequisiteService; 
import zw.co.hisolutions.core.common.basic.service.GenericService;

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
