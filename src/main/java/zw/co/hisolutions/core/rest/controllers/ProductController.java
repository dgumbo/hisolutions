package zw.co.hisolutions.core.rest.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.ExposesResourceFor;
import org.springframework.hateoas.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import zw.co.hisolutions.core.common.util.Results;
import zw.co.hisolutions.core.common.util.Results.DBActionResult;
import zw.co.hisolutions.core.common.entity.Product;
import zw.co.hisolutions.core.common.service.ProductService; 

@Controller
@RequestMapping("/products")
@ExposesResourceFor(Product.class)
public class ProductController {

    private ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @RequestMapping(value = "", produces = {MediaType.APPLICATION_JSON_VALUE, "application/hal+json"})
    public ResponseEntity<List<Resource<Product>>> getAllProducts() {
        List<Resource<Product>> productResourceList = new ArrayList();

        productService.getAllProducts().forEach(product -> {
            productResourceList.add(productService.buildProductResource(product));
        });

        return new ResponseEntity<>(productResourceList, HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE, "application/hal+json"})
    public ResponseEntity<Resource<Product>> getProduct(@PathVariable Long id) {
        Product product = productService.findProduct(id);
        Resource<Product> productResource = productService.buildProductResource(product);

        return new ResponseEntity<>(productResource, HttpStatus.OK);
    }

    @RequestMapping(value = "", method = RequestMethod.POST, produces = {MediaType.APPLICATION_JSON_VALUE, "application/hal+json"})
    public ResponseEntity<Resource<Product>> createProduct(@RequestBody Resource<Product> productResource) throws Exception {
//        System.out.println("\nProduct B4 Save : " + productResource.getContent() + "\n");

        ResponseEntity responseEntity;
        HttpStatus httpStatus;
        Product product = productResource.getContent();
        try {
            product = productService.createProduct(product);
            httpStatus = HttpStatus.CREATED;
            productResource = productService.buildProductResource(product);
            responseEntity = new ResponseEntity<>(productResource, httpStatus);
        } catch (Exception ex) {
            httpStatus = HttpStatus.NOT_IMPLEMENTED;
            responseEntity = new ResponseEntity<>(new Results(DBActionResult.EncounteredError, "Could not create product.", "new", Product.class), httpStatus);

            System.out.println(ex.getMessage());
            Logger.getLogger(ProductController.class.getName()).log(Level.SEVERE, null, ex);
        }
        

        return responseEntity;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT, produces = {MediaType.APPLICATION_JSON_VALUE, "application/hal+json"})
    public ResponseEntity<Resource<Product>> editProduct(@PathVariable Long id, @RequestBody Resource<Product> productResource) {
        //System.out.println("\nzw.co.hisolutions.tutorials.rest.controllers.ProductController.editProduct()\n");

        ResponseEntity responseEntity;
        HttpStatus httpStatus;
        Product product = productResource.getContent();
        try {
            product = productService.updateProduct(id, product);
            httpStatus = HttpStatus.OK;
            productResource = productService.buildProductResource(product);
            responseEntity = new ResponseEntity<>(productResource, httpStatus);
        } catch (Exception ex) {
            httpStatus = HttpStatus.NOT_MODIFIED;
            responseEntity = new ResponseEntity<>(new Results(DBActionResult.EncounteredError, "Could not edit product.", id.toString(), Product.class), httpStatus);

            Logger.getLogger(ProductController.class.getName()).log(Level.SEVERE, null, ex);
        }

        return responseEntity;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE, produces = {MediaType.APPLICATION_JSON_VALUE, "application/hal+json"})
    @ResponseBody
    public ResponseEntity<Results> deleteProduct(@PathVariable Long id) {
        //   System.out.println("\nzw.co.hisolutions.tutorials.rest.controllers.ProductController.deleteProduct()\n");

        Results results;
        HttpStatus httpStatus;
        try {
            productService.deleteProduct(id);
            results = new Results(DBActionResult.Success, "Successiful Deleted", id.toString(), Product.class);
            httpStatus = HttpStatus.OK;
        } catch (Exception ex) {
            httpStatus = HttpStatus.NOT_IMPLEMENTED;
            results = new Results(DBActionResult.Failed, "Failed to Delete", id.toString(), Product.class);
            Logger.getLogger(ProductController.class.getName()).log(Level.SEVERE, null, ex);
        }

        return new ResponseEntity<>(results, httpStatus);
    }
}
