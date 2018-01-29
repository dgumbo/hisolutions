package zw.co.hisolutions.core.entity.service;
 
import zw.co.hisolutions.core.entity.Technology;
import zw.co.hisolutions.core.common.basic.service.BasicService;

public interface TechnologyService extends BasicService<Technology>{
    public Technology findByName(String name);   
}
