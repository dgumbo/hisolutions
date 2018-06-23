package zw.co.hisolutions.backend.core.service;
 
import zw.co.hisolutions.backend.core.entity.Duration;
import zw.co.hisolutions.common.service.GenericService;

public interface DurationService extends GenericService<Duration, Long>{
    public Duration findByName(String name);   
}
