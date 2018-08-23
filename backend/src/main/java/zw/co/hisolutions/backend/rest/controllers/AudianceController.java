package zw.co.hisolutions.backend.rest.controllers;
 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import zw.co.hisolutions.common.controllers.rest.BasicRestController;
import zw.co.hisolutions.backend.core.entity.Audiance;
import zw.co.hisolutions.backend.core.service.AudianceService; 
import zw.co.hisolutions.common.service.GenericService;

@RestController
@RequestMapping("/rest/audiances")
public class AudianceController extends BasicRestController<Audiance, Long >{

    private final  AudianceService audianceService;
    
    @Autowired
    public AudianceController  (AudianceService audianceService) {
        this.audianceService = audianceService;        
    }

    @Override
    public GenericService getService() {
        return this.audianceService;
    }

    @Override
    public Class getControllerClass() {
       return this.getClass();
    }

}
