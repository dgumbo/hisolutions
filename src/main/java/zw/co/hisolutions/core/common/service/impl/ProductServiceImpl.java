package zw.co.hisolutions.core.common.service.impl;

import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.Resource;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import zw.co.hisolutions.core.common.entity.Product;
import zw.co.hisolutions.core.common.entity.dao.ProductDao;
import zw.co.hisolutions.core.common.service.ProductService;
import zw.co.hisolutions.core.rest.controllers.ProductController;

@Repository
@Service
@Transactional
public class ProductServiceImpl implements ProductService {

    private ProductDao productDao;

    @Autowired
    public ProductServiceImpl(ProductDao productDao) {
        this.productDao = productDao;
    }

    @Override
    public Product findProduct(Long id) throws NullPointerException {
        return productDao.findById(id).get();
    }

    @Override
    public Product createProduct(Product data) throws NullPointerException {
        return productDao.save(data);
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
    public Product updateProduct(Long id, Product product) {
        Product productToUpdate = findProduct(id);
        if (productToUpdate == null) {
            return null;
        } 

        productToUpdate.setActiveStatus(product.isActiveStatus());
        productToUpdate.setDescription(product.getDescription());
        productToUpdate.setName(product.getName());
        productToUpdate.setPrice(product.getPrice());
        
        return productDao.save(productToUpdate);
    }

    @Override
    public List<Product> getAllProducts() {
        return (List<Product>) productDao.findAll();
    }

    @Override
    public void deleteProduct(Product product) {
        productDao.delete(product);
    }

    @Override
    public void deleteProduct(Long id) {
        Product productToDelete = findProduct(id);
        deleteProduct(productToDelete);
    }
}
