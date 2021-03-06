package zw.co.hisolutions.backend.core.service.impl;

import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import zw.co.hisolutions.backend.rest.controllers.ProductController;
import zw.co.hisolutions.backend.core.entity.Product;
import zw.co.hisolutions.backend.core.entity.ServiceCategory;
import zw.co.hisolutions.backend.core.entity.dao.ProductDao;
import zw.co.hisolutions.backend.core.service.ProductService; 
 
@Service
@Transactional
public class ProductServiceImpl implements ProductService {

    private final ProductDao productDao;

    @Autowired
    public ProductServiceImpl(ProductDao productDao) {
        this.productDao = productDao;
    } 

    @Override
    public Product findByName(String name) {
        return productDao.getByName(name);
    }
 
    @Override
    public void deleteProduct(Product product) {
        productDao.delete(product);
    }
 
    @Override
    public JpaRepository<Product, Long> getDao() {
        return productDao;
    }

    @Override
    public Class getController() {
        return ProductController.class;
    }

    @Override
    public List<Product> findProductByServiceCategory(Long serviceCategoryId) {    
        return productDao.getByServiceCategoryId(serviceCategoryId);
    }

    @Override
    public List<Product> findProductByServiceCategory(ServiceCategory serviceCategory) {
        return productDao.getByServiceCategory(serviceCategory);
    } 
}
