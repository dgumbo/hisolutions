package zw.co.hisolutions.core.entity.dao;

import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Repository;  
import zw.co.hisolutions.core.entity.ServiceCategory;

/**
 *
 * @author denzil
 */
@Repository
public interface ServiceCategoryDao extends JpaRepository<ServiceCategory, Long>{ 

    public ServiceCategory getByName(String name);    
    
}
