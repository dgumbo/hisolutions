package zw.co.hisolutions.backend.rest.controllers;
 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController; 
import zw.co.hisolutions.common.controllers.rest.BasicRestController;
import zw.co.hisolutions.backend.core.entity.Topic;
import zw.co.hisolutions.common.service.GenericService;
import zw.co.hisolutions.backend.core.service.TopicService;

@RestController
@RequestMapping("/rest/topics")
public class TopicController extends BasicRestController<Topic, Long>{

    private final  TopicService topicService;
    
    @Autowired
    public TopicController  (TopicService courseTopicService) {
        this.topicService = courseTopicService;        
    }

    @Override
    public GenericService getService() {
        return this.topicService;
    }

    @Override
    public Class getControllerClass() {
       return this.getClass();
    }

}
