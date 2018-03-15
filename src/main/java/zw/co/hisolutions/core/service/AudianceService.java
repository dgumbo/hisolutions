package zw.co.hisolutions.core.service;
  
import zw.co.hisolutions.core.common.basic.service.GenericService;
import zw.co.hisolutions.core.entity.Audiance;

public interface AudianceService extends GenericService<Audiance, Long>{
    public Audiance findByName(String name);   
}
