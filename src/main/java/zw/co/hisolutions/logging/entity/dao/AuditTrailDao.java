package zw.co.hisolutions.logging.entity.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import zw.co.hisolutions.logging.entity.AuditTrail;

@Repository
public interface AuditTrailDao  extends JpaRepository<AuditTrail, Long>{
  


}
