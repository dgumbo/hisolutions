package zw.co.hisolutions.core.service;
  
import zw.co.hisolutions.core.common.basic.service.GenericService;
import zw.co.hisolutions.core.entity.CourseTopic;

public interface CourseTopicService extends GenericService<CourseTopic, Long>{
    public CourseTopic findByName(String name);   
}
