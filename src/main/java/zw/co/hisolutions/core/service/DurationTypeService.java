package zw.co.hisolutions.core.service;
 
import zw.co.hisolutions.core.entity.DurationType;
import zw.co.hisolutions.common.service.GenericService;

public interface DurationTypeService extends GenericService<DurationType, Long>{
    public DurationType findByName(String name);   
}
