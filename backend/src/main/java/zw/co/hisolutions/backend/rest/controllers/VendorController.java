package zw.co.hisolutions.backend.rest.controllers;
 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import zw.co.hisolutions.common.controllers.rest.BasicRestController;
import zw.co.hisolutions.backend.core.entity.Vendor;
import zw.co.hisolutions.backend.core.service.VendorService; 
import zw.co.hisolutions.common.service.GenericService;

@RestController
@RequestMapping("/rest/vendors")
public class VendorController extends BasicRestController<Vendor, Long>{

    private final  VendorService vendorService;
    
    @Autowired
    public VendorController  (VendorService vendorService) {
        this.vendorService = vendorService;        
    }

    @Override
    public GenericService getService() {
        return this.vendorService;
    }

    @Override
    public Class getControllerClass() {
       return this.getClass();
    }

}
