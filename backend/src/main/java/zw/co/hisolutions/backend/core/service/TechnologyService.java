package zw.co.hisolutions.backend.core.service;
 
import zw.co.hisolutions.backend.core.entity.Technology;
import zw.co.hisolutions.common.service.GenericService;

public interface TechnologyService extends GenericService<Technology, Long>{
    public Technology findByName(String name);   
}
