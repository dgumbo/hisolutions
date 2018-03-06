package zw.co.hisolutions.core.controllers.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import zw.co.hisolutions.core.common.basic.controller.rest.BasicRestController;
import zw.co.hisolutions.core.entity.ServiceCategory;
import zw.co.hisolutions.core.service.ServiceCategoryService;
import zw.co.hisolutions.core.common.basic.service.GenericService; 

@RestController
@RequestMapping("/rest/servicecategory")
public class ServiceCategoryController extends BasicRestController<ServiceCategory, Long> {

    private final ServiceCategoryService serviceCategoryService;
   // private final FileSystemDocumentStorageService fileSystemDocumentStorageService; 

    @Autowired
    public ServiceCategoryController(ServiceCategoryService serviceCategoryService/*,   FileSystemDocumentStorageService fileSystemDocumentStorageService*/) {
        this.serviceCategoryService = serviceCategoryService;
     //   this.fileSystemDocumentStorageService = fileSystemDocumentStorageService; 
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
