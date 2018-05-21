package zw.co.hisolutions.core.controllers.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import zw.co.hisolutions.common.controllers.rest.BasicRestController;
import zw.co.hisolutions.core.entity.ServiceCategory;
import zw.co.hisolutions.core.service.ServiceCategoryService;
import zw.co.hisolutions.common.service.GenericService; 

@RestController
@RequestMapping("/rest/servicecategories")
public class ServiceCategoryController extends BasicRestController<ServiceCategory, Long> {

    private final ServiceCategoryService serviceCategoryService; 

    @Autowired
    public ServiceCategoryController(ServiceCategoryService serviceCategoryService ) {
        this.serviceCategoryService = serviceCategoryService; 
    }

    @Override
    public GenericService getService() {
        return this.serviceCategoryService;
    }

    @Override
    public Class getControllerClass() {
        return this.getClass();
    } 

    @GetMapping(value = "/getByName/{name}", produces = {MediaType.APPLICATION_JSON_VALUE, "application/hal+json"})
    public ResponseEntity<?> getByName (@PathVariable String name) {
        ServiceCategory serviceCategory = serviceCategoryService.findByName(name);
        //Resource resource = getService().buildResource(entity);
        //System.out.println("\n T B4 Save : " + resource.getContent() + "\n");
        return new ResponseEntity<>(serviceCategory, HttpStatus.OK);
    } 
}
