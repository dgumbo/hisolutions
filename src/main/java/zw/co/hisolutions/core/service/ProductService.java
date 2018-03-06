package zw.co.hisolutions.core.service;
 
import java.util.List;
import org.springframework.hateoas.Resource;
import zw.co.hisolutions.core.common.basic.service.GenericService;
import zw.co.hisolutions.core.entity.Product;

public interface ProductService extends GenericService<Product, Long>{
    public Product findProductByName(String productName);  
    public Resource<Product> buildProductResource(Product product);
    public void deleteProduct(Product product);  
}
