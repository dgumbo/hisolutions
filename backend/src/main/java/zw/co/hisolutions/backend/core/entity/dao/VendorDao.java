package zw.co.hisolutions.backend.core.entity.dao;

import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Repository; 
import zw.co.hisolutions.backend.core.entity.Vendor;

/**
 *
 * @author denzil
 */
@Repository
public interface VendorDao extends JpaRepository<Vendor, Long>{ 

    public Vendor getByName(String name); 
    
}
