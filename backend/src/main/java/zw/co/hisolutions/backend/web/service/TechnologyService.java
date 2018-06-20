package zw.co.hisolutions.backend.web.service;
 
import zw.co.hisolutions.backend.web.entity.Technology;
import zw.co.hisolutions.common.service.GenericService;

public interface TechnologyService extends GenericService<Technology, Long>{
    public Technology findByName(String name);   
}
