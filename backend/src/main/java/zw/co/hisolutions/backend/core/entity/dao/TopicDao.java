package zw.co.hisolutions.backend.core.entity.dao;

import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Repository; 
import zw.co.hisolutions.backend.core.entity.Topic; 

/**
 *
 * @author denzil
 */
@Repository
public interface TopicDao extends JpaRepository<Topic, Long>{ 

    public Topic getByName(String name); 
    
}
