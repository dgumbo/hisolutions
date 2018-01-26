 package zw.co.hisolutions.authentication.dao;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;  
import zw.co.hisolutions.authentication.entity.Location;

/**
 *
 * @author dgumbo
 */
@Repository
public interface LocationDao extends JpaRepository<Location, Long> { 
    
}
