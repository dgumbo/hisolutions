package zw.co.hisolutions.backend.web.service;

import java.util.List;
import zw.co.hisolutions.common.service.GenericService;
import zw.co.hisolutions.backend.web.entity.Product;
import zw.co.hisolutions.backend.web.entity.ServiceCategory;

public interface ProductService extends GenericService<Product, Long> {
 
    Product findByName(String name);

    void deleteProduct(Product product);

    List<Product> findProductByServiceCategory(Long serviceCategoryId);
    List<Product> findProductByServiceCategory(ServiceCategory serviceCategory);

}
