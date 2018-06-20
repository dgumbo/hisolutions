package zw.co.hisolutions.backend.web.entity.dao;

import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Repository; 
import zw.co.hisolutions.backend.web.entity.PreRequisite; 

/**
 *
 * @author denzil
 */
@Repository
public interface PreRequisiteDao extends JpaRepository<PreRequisite, Long>{ 

    public PreRequisite getByName(String name); 
    
}
