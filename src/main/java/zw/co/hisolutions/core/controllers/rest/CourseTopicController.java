package zw.co.hisolutions.core.controllers.rest;
 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import zw.co.hisolutions.core.common.basic.controller.rest.BasicRestController;
import zw.co.hisolutions.core.entity.CourseTopic;
import zw.co.hisolutions.core.service.CourseTopicService; 
import zw.co.hisolutions.core.common.basic.service.GenericService;

@RestController
@RequestMapping("/rest/coursetopics")
public class CourseTopicController extends BasicRestController<CourseTopic, Long>{

    private final  CourseTopicService courseTopicService;
    
    @Autowired
    public CourseTopicController  (CourseTopicService courseTopicService) {
        this.courseTopicService = courseTopicService;        
    }

    @Override
    public GenericService getService() {
        return this.courseTopicService;
    }

    @Override
    public Class getControllerClass() {
       return this.getClass();
    }

}
