package zw.co.hisolutions.core.entity.dao;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import zw.co.hisolutions.core.entity.Product;
import zw.co.hisolutions.core.entity.ServiceCategory;

/**
 *
 * @author denzil
 */
@Repository
public interface ProductDao extends JpaRepository<Product, Long>{ 

    public Product getByName(String name); 

    public List<Product> getByServiceCategory(ServiceCategory serviceCategory); 

    public List<Product> getByServiceCategoryId(Long serviceCategoryId);
    
}
