package zw.co.hisolutions.backend.rest.controllers;
 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController; 
import zw.co.hisolutions.common.controllers.rest.BasicRestController;
import zw.co.hisolutions.backend.core.entity.ProductType;
import zw.co.hisolutions.backend.core.service.ProductTypeService; 
import zw.co.hisolutions.common.service.GenericService;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/rest/producttypes")
public class ProductTypeController extends BasicRestController<ProductType, Long>{

    private final  ProductTypeService productTypeService;
    
    @Autowired
    public ProductTypeController  (ProductTypeService productTypeService) {
        this.productTypeService = productTypeService;        
    }

    @Override
    public GenericService getService() {
        return this.productTypeService;
    }

    @Override
    public Class getControllerClass() {
       return this.getClass();
    }

}
