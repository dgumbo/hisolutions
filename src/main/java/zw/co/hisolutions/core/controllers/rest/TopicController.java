package zw.co.hisolutions.core.controllers.rest;
 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import zw.co.hisolutions.core.common.basic.controller.rest.BasicRestController;
import zw.co.hisolutions.core.entity.Topic;
import zw.co.hisolutions.core.common.basic.service.GenericService;
import zw.co.hisolutions.core.service.TopicService;

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
