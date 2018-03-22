package zw.co.hisolutions.core.service;
 
import zw.co.hisolutions.core.entity.Technology;
import zw.co.hisolutions.common.service.GenericService;

public interface TechnologyService extends GenericService<Technology, Long>{
    public Technology findByName(String name);   
}
