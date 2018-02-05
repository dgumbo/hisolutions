package zw.co.hisolutions.core.entity.dao;

import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository; 
import zw.co.hisolutions.core.entity.Duration;

/**
 *
 * @author denzil
 */
@Repository
@RepositoryRestResource(path = "test/durations")
public interface DurationDao extends JpaRepository<Duration, Long>{ 

    public Duration getByName(String name); 
    
}
