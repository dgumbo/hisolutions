package zw.co.hisolutions.core.controllers.rest;

import org.springframework.beans.factory.annotation.Autowired;
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

 

 
}
