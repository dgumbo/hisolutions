package zw.co.hisolutions.core.service;
  
import zw.co.hisolutions.core.common.basic.service.GenericService;
import zw.co.hisolutions.core.entity.PreRequisite;

public interface PreRequisiteService extends GenericService<PreRequisite, Long>{
    public PreRequisite findByName(String name);   
}
