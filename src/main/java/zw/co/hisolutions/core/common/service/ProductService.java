package zw.co.hisolutions.core.common.service;

import java.util.List;
import org.springframework.hateoas.Resource;
import zw.co.hisolutions.core.common.entity.Product;

public interface ProductService {
    public Product findProduct(Long id);
    public Product findProductByName(String productName); 
    public Product createProduct(Product data) throws Exception;    

    public Resource<Product> buildProductResource(Product product);

    public Product updateProduct(Long id, Product product);

    public List<Product> getAllProducts();

    public void deleteProduct(Product product); 
    public void deleteProduct(Long id);  
}
