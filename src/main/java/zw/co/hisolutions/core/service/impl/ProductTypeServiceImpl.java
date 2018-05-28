package zw.co.hisolutions.core.service.impl;

import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Service; 
import zw.co.hisolutions.core.controllers.rest.ProductTypeController;
import zw.co.hisolutions.core.entity.ProductType;
import zw.co.hisolutions.core.entity.dao.ProductTypeDao;
import zw.co.hisolutions.core.service.ProductTypeService;
 
@Service
@Transactional
public class ProductTypeServiceImpl implements ProductTypeService {
    private final ProductTypeDao productTypeDao;

    @Autowired
    public ProductTypeServiceImpl(ProductTypeDao productTypeDao ){ 
        this.productTypeDao = productTypeDao;
    }
    
     @Override
    public ProductType findByName(String name) {
        return productTypeDao.getByName(name);
    } 

    @Override
    public JpaRepository<ProductType, Long> getDao() {
       return this.productTypeDao;
    }

    @Override
    public Class getController() {
       return ProductTypeController.class;
    }
}