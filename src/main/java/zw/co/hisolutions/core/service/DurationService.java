package zw.co.hisolutions.core.service;
 
import zw.co.hisolutions.core.entity.Duration;
import zw.co.hisolutions.common.service.GenericService;

public interface DurationService extends GenericService<Duration, Long>{
    public Duration findByName(String name);   
}
