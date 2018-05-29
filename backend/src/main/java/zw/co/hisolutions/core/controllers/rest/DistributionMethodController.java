package zw.co.hisolutions.core.controllers.rest;
 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import zw.co.hisolutions.common.controllers.rest.BasicRestController;
import zw.co.hisolutions.core.entity.DistributionMethod;
import zw.co.hisolutions.core.service.DistributionMethodService; 
import zw.co.hisolutions.common.service.GenericService;

@RestController
@RequestMapping("/rest/distributionmethods")
public class DistributionMethodController extends BasicRestController<DistributionMethod, Long >{

    private final  DistributionMethodService distributionMethodService;
    
    @Autowired
    public DistributionMethodController  (DistributionMethodService distributionMethodService) {
        this.distributionMethodService = distributionMethodService;        
    }

    @Override
    public GenericService getService() {
        return this.distributionMethodService;
    }

    @Override
    public Class getControllerClass() {
       return this.getClass();
    }

}
