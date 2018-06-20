package zw.co.hisolutions.backend.web.service;
  
import zw.co.hisolutions.common.service.GenericService;
import zw.co.hisolutions.backend.web.entity.Audiance;

public interface AudianceService extends GenericService<Audiance, Long>{
    public Audiance findByName(String name);   
}
