package zw.co.hisolutions.core.common.entity.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import zw.co.hisolutions.core.common.entity.Product;

/**
 *
 * @author denzil
 */
@Repository
public interface ProductDao extends CrudRepository<Product, Long>{ 

    public Product getByName(String name); 
    
}
