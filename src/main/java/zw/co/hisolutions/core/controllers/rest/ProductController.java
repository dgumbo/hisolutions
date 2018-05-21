package zw.co.hisolutions.core.controllers.rest;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import zw.co.hisolutions.common.controllers.rest.BasicRestController; 
import zw.co.hisolutions.common.service.GenericService;
import zw.co.hisolutions.core.entity.Product;
import zw.co.hisolutions.core.service.ProductService; 

@Controller
@RequestMapping("/rest/products")
//@ExposesResourceFor(Product.class)
public class ProductController extends BasicRestController<Product, Long>    {

    private ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    } 

    @Override
    public GenericService getService() {
        return this.productService;
    }

    @Override
    public Class getControllerClass() {
        return this.getClass() ;
    }

    @GetMapping(value = "/getByServiceCategoryID/{serviceCategoryId}", produces = {MediaType.APPLICATION_JSON_VALUE, "application/hal+json"})
    public ResponseEntity<?> getByServiceCategoryID (@PathVariable Long serviceCategoryId) {
        List<Product> productList = productService.findProductByServiceCategory(serviceCategoryId);
        //Resource resource = getService().buildResource(entity);
        //System.out.println("\n T B4 Save : " + resource.getContent() + "\n");
        return new ResponseEntity<>(productList, HttpStatus.OK);
    }

    @GetMapping(value = "/getByName/{name}", produces = {MediaType.APPLICATION_JSON_VALUE, "application/hal+json"})
    public ResponseEntity<?> getByName (@PathVariable String name) {
        Product product = productService.findByName(name);
        //Resource resource = getService().buildResource(entity);
        //System.out.println("\n T B4 Save : " + resource.getContent() + "\n");
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

}
