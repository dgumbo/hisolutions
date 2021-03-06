package zw.co.hisolutions.backend.rest.controllers;
 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import zw.co.hisolutions.common.controllers.rest.BasicRestController;
import zw.co.hisolutions.backend.core.entity.DurationType;
import zw.co.hisolutions.backend.core.service.DurationTypeService; 
import zw.co.hisolutions.common.service.GenericService;

@RestController
@RequestMapping("/rest/durationtypes")
public class DurationTypeController extends BasicRestController<DurationType, Long>{

    private final  DurationTypeService durationTypeService;
    
    @Autowired
    public DurationTypeController  (DurationTypeService durationTypeService) {
        this.durationTypeService = durationTypeService;        
    }

    @Override
    public GenericService getService() {
        return this.durationTypeService;
    }

    @Override
    public Class getControllerClass() {
       return this.getClass();
    }

}
