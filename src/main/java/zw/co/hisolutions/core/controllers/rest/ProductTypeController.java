package zw.co.hisolutions.core.controllers.rest;
 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import zw.co.hisolutions.core.common.basic.controller.rest.BasicRestController;
import zw.co.hisolutions.core.entity.ProductType;
import zw.co.hisolutions.core.service.ProductTypeService; 
import zw.co.hisolutions.core.common.basic.service.GenericService;

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
