package zw.co.hisolutions.core.service;
  
import zw.co.hisolutions.core.common.basic.service.GenericService;
import zw.co.hisolutions.core.entity.Topic;

public interface TopicService extends GenericService<Topic, Long>{
    public Topic findByName(String name);   
}
