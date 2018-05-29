package zw.co.hisolutions.core.service.impl;

import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Service; 
import zw.co.hisolutions.core.controllers.rest.ServiceCategoryController;
import zw.co.hisolutions.core.entity.ServiceCategory;
import zw.co.hisolutions.core.entity.dao.ServiceCategoryDao;
import zw.co.hisolutions.core.service.ServiceCategoryService;
 
@Service
@Transactional
public class ServiceCategoryServiceImpl implements ServiceCategoryService {
    private final ServiceCategoryDao serviceCategoryDao;

    @Autowired
    public ServiceCategoryServiceImpl(ServiceCategoryDao serviceCategoryDao ){ 
        this.serviceCategoryDao = serviceCategoryDao;
    }
    
     @Override
    public ServiceCategory findByName(String name) {
        return serviceCategoryDao.getByName(name);
    } 

    @Override
    public JpaRepository<ServiceCategory, Long> getDao() {
       return this.serviceCategoryDao;
    }

    @Override
    public Class getController() {
       return ServiceCategoryController.class;
    } 
}
