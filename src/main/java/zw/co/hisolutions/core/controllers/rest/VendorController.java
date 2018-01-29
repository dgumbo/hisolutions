package zw.co.hisolutions.core.controllers.rest;
 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import zw.co.hisolutions.core.common.basic.controllers.rest.BaseRestController;
import zw.co.hisolutions.core.common.basic.service.BasicService;
import zw.co.hisolutions.core.entity.Vendor;
import zw.co.hisolutions.core.entity.service.VendorService; 

@RestController
@RequestMapping("/test/vendors")
public class VendorController extends BaseRestController<Vendor>{

    private final  VendorService vendorService;
    
    @Autowired
    public VendorController  (VendorService vendorService) {
        this.vendorService = vendorService;        
    }

    @Override
    public BasicService getService() {
        return this.vendorService;
    }

    @Override
    public Class getControllerClass() {
       return this.getClass();
    }

}
