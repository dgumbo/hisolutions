package zw.co.hisolutions.backend.core.entity.dao;

import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Repository; 
import zw.co.hisolutions.backend.core.entity.ProductType;

/**
 *
 * @author denzil
 */
@Repository
public interface ProductTypeDao extends JpaRepository<ProductType, Long>{ 

    public ProductType getByName(String name); 
    
}
