 package zw.co.hisolutions.core.security.dao;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;  
import zw.co.hisolutions.core.security.entity.Location;

/**
 *
 * @author dgumbo
 */
@Repository
public interface LocationDao extends JpaRepository<Location, Long> { 
    
}
