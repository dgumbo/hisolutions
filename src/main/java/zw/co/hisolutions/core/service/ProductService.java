package zw.co.hisolutions.core.service;
 
import zw.co.hisolutions.core.common.basic.service.GenericService;
import zw.co.hisolutions.core.entity.Product;

public interface ProductService extends GenericService<Product, Long>{
    public Product findProductByName(String productName);   
    public void deleteProduct(Product product);  
}
