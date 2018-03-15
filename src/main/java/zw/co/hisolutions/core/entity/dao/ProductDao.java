package zw.co.hisolutions.core.entity.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import zw.co.hisolutions.core.entity.Product;

/**
 *
 * @author denzil
 */
@Repository
public interface ProductDao extends JpaRepository<Product, Long>{ 

    public Product getByName(String name); 
    
}
