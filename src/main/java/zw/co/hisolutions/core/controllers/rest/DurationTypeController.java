package zw.co.hisolutions.core.controllers.rest;
 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import zw.co.hisolutions.core.common.basic.controller.rest.BasicRestController;
import zw.co.hisolutions.core.entity.DurationType;
import zw.co.hisolutions.core.service.DurationTypeService; 
import zw.co.hisolutions.core.common.basic.service.GenericService;

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
