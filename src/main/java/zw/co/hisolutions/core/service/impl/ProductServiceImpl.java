package zw.co.hisolutions.core.service.impl;

import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import zw.co.hisolutions.core.controllers.rest.ProductController;
import zw.co.hisolutions.core.entity.Product;
import zw.co.hisolutions.core.entity.dao.ProductDao;
import zw.co.hisolutions.core.service.ProductService; 
 
@Service
@Transactional
public class ProductServiceImpl implements ProductService {

    private ProductDao productDao;

    @Autowired
    public ProductServiceImpl(ProductDao productDao) {
        this.productDao = productDao;
    }
 

    @Override
    public Product findProductByName(String name) {
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
}
