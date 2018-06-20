package zw.co.hisolutions.backend.web.service;
 
import zw.co.hisolutions.backend.web.entity.DurationType;
import zw.co.hisolutions.common.service.GenericService;

public interface DurationTypeService extends GenericService<DurationType, Long>{
    public DurationType findByName(String name);   
}
