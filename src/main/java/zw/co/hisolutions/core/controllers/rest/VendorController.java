package zw.co.hisolutions.core.controllers.rest;
 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import zw.co.hisolutions.core.common.basic.controller.rest.BasicRestController;
import zw.co.hisolutions.core.entity.Vendor;
import zw.co.hisolutions.core.service.VendorService; 
import zw.co.hisolutions.core.common.basic.service.GenericService;

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
