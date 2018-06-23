package zw.co.hisolutions.backend.rest.controllers;
 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import zw.co.hisolutions.common.controllers.rest.BasicRestController;
import zw.co.hisolutions.backend.core.entity.DistributionMethod;
import zw.co.hisolutions.backend.core.service.DistributionMethodService; 
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
