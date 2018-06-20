package zw.co.hisolutions.backend.web.entity.dao;

import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Repository;  
import zw.co.hisolutions.backend.web.entity.Audiance;

/**
 *
 * @author denzil
 */
@Repository
public interface AudianceDao extends JpaRepository<Audiance, Long>{ 

    public Audiance getByName(String name); 
    
}
