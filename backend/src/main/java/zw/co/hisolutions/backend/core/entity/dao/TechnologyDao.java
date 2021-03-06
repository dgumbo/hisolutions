package zw.co.hisolutions.backend.core.entity.dao;

import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Repository; 
import zw.co.hisolutions.backend.core.entity.Technology;

/**
 *
 * @author denzil
 */
@Repository
public interface TechnologyDao extends JpaRepository<Technology, Long>{ 

    public Technology getByName(String name); 
    
}
