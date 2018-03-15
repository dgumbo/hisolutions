package zw.co.hisolutions.core.controllers.rest;
 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import zw.co.hisolutions.core.common.basic.controller.rest.BasicRestController;
import zw.co.hisolutions.core.entity.Duration;
import zw.co.hisolutions.core.service.DurationService; 
import zw.co.hisolutions.core.common.basic.service.GenericService;

@RestController
@RequestMapping("/rest/durations")
public class DurationController extends BasicRestController<Duration, Long>{

    private final  DurationService durationService;
    
    @Autowired
    public DurationController  (DurationService durationService) {
        this.durationService = durationService;        
    }

    @Override
    public GenericService getService() {
        return this.durationService;
    }

    @Override
    public Class getControllerClass() {
       return this.getClass();
    } 
}
