package zw.co.hisolutions.backend.web.entity.dao;

import org.springframework.data.jpa.repository.JpaRepository;  
import org.springframework.stereotype.Repository; 
import zw.co.hisolutions.backend.web.entity.Duration;

/**
 *
 * @author denzil
 */
@Repository
//@RepositoryRestResource(path = "test/durations")
public interface DurationDao extends JpaRepository<Duration, Long>{ 

    public Duration getByName(String name); 
    
}
