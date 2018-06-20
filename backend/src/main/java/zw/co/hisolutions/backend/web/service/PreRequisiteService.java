package zw.co.hisolutions.backend.web.service;
  
import zw.co.hisolutions.common.service.GenericService;
import zw.co.hisolutions.backend.web.entity.PreRequisite;

public interface PreRequisiteService extends GenericService<PreRequisite, Long>{
    public PreRequisite findByName(String name);   
}
