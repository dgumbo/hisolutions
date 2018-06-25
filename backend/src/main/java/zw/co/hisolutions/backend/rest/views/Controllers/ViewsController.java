package zw.co.hisolutions.backend.rest.views.Controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import zw.co.hisolutions.backend.core.entity.Product;
import zw.co.hisolutions.backend.core.entity.ServiceCategory;
import zw.co.hisolutions.backend.core.service.ProductService;
import zw.co.hisolutions.backend.core.service.ServiceCategoryService;

/**
 *
 * @author dgumbo
 */
@RestController
@RequestMapping("/views/rest")
public class ViewsController {
    
    private ProductService productService;
    private ServiceCategoryService serviceCategoryService;

    @Autowired
    public ViewsController(ProductService productService, ServiceCategoryService serviceCategoryService) {
        this.productService = productService;
        this.serviceCategoryService = serviceCategoryService;
    }  

    @GetMapping(value = "/getServiceCategoryByName/{name}")
    public ResponseEntity<?> getServiceCategoryByName (@PathVariable String name) {
        ServiceCategory serviceCategory = serviceCategoryService.findByName(name); 
        return new ResponseEntity<>(serviceCategory, HttpStatus.OK);
    } 

    @GetMapping(value = "/getAllServiceCategory")
    public ResponseEntity<?> getAllServiceCategories () {
        List<ServiceCategory> serviceCategories = serviceCategoryService.findAll(); 
        return new ResponseEntity<>(serviceCategories, HttpStatus.OK);
    } 

    @GetMapping(value = "/getProductByName/{name}")
    public ResponseEntity<?> getProductByName (@PathVariable String name) {
        Product product = productService.findByName(name); 
        return new ResponseEntity<>(product, HttpStatus.OK);
    } 

    @GetMapping(value = "/getAllProduct")
    public ResponseEntity<?> getAllProduct () {
        List<Product> products = productService.findAll(); 
        return new ResponseEntity<>(products, HttpStatus.OK);
    } 

    @GetMapping(value = "/getProductById/{id}")
    public ResponseEntity<?> getProductById (@PathVariable Long id) {
        Product product = productService.find(id); 
        return new ResponseEntity<>(product, HttpStatus.OK);
    } 

    @GetMapping(value = "/getServiceCategoryById/{id}")
    public ResponseEntity<?> getServiceCategoryById (@PathVariable Long id) {
        ServiceCategory serviceCategory = serviceCategoryService.find(id); 
        return new ResponseEntity<>(serviceCategory, HttpStatus.OK);
    } 
}
