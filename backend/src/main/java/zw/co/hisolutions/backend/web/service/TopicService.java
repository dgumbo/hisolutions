package zw.co.hisolutions.backend.web.service;
  
import zw.co.hisolutions.common.service.GenericService;
import zw.co.hisolutions.backend.web.entity.Topic;

public interface TopicService extends GenericService<Topic, Long>{
    public Topic findByName(String name);   
}
