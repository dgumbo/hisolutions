package zw.co.hisolutions.backend.core.service;
  
import zw.co.hisolutions.common.service.GenericService;
import zw.co.hisolutions.backend.core.entity.Topic;

public interface TopicService extends GenericService<Topic, Long>{
    public Topic findByName(String name);   
}
