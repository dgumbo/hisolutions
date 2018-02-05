package zw.co.hisolutions.core.controllers.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import zw.co.hisolutions.core.common.basic.controller.rest.BasicRestController;
import zw.co.hisolutions.core.common.basic.service.GenericService;
import zw.co.hisolutions.core.entity.Product;
import zw.co.hisolutions.core.service.ProductService; 

@Controller
@RequestMapping("/rest/products")
//@ExposesResourceFor(Product.class)
public class ProductController extends BasicRestController<Product, Long>{

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
}
