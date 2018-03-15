package zw.co.hisolutions.core.entity.dao;

import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Repository; 
import zw.co.hisolutions.core.entity.DistributionMethod;

/**
 *
 * @author denzil
 */
@Repository
public interface DistributionMethodDao extends JpaRepository<DistributionMethod, Long>{ 

    public DistributionMethod getByName(String name); 
    
}
