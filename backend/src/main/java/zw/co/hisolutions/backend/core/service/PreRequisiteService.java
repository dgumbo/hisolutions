package zw.co.hisolutions.backend.core.service;
  
import zw.co.hisolutions.common.service.GenericService;
import zw.co.hisolutions.backend.core.entity.PreRequisite;

public interface PreRequisiteService extends GenericService<PreRequisite, Long>{
    public PreRequisite findByName(String name);   
}
