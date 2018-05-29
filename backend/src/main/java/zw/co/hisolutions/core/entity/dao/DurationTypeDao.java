package zw.co.hisolutions.core.entity.dao;

import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Repository;  
import zw.co.hisolutions.core.entity.DurationType;

/**
 *
 * @author denzil
 */
@Repository 
public interface DurationTypeDao extends JpaRepository<DurationType, Long>{ 

    public DurationType getByName(String name); 
    
}
