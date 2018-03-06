package zw.co.hisolutions.core.service.impl;

import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.Resource;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;
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
    public Resource<Product> buildProductResource(Product product) {
        Resource<Product> product_resource = new Resource<>(product);
        Link selectlink = linkTo(ProductController.class).slash(product_resource.getContent().getId()).withSelfRel().withType("get");;
        Link deletelink = linkTo(ProductController.class).slash(product_resource.getContent().getId()).slash("delete").withRel("delete").withType("delete");;
        product_resource.add(selectlink);
        product_resource.add(deletelink);

        return product_resource;
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
