package zw.co.hisolutions.core.service;

import java.util.List;
import zw.co.hisolutions.common.service.GenericService;
import zw.co.hisolutions.core.entity.Product;
import zw.co.hisolutions.core.entity.ServiceCategory;

public interface ProductService extends GenericService<Product, Long> {

    Product findProductByName(String productName);

    void deleteProduct(Product product);

    List<Product> findProductByServiceCategory(Long serviceCategoryId);
    List<Product> findProductByServiceCategory(ServiceCategory serviceCategory);
}
