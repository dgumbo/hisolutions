package zw.co.hisolutions.core.service.impl;

import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Service; 
import zw.co.hisolutions.core.controllers.rest.TopicController;
import zw.co.hisolutions.core.entity.Topic;
import zw.co.hisolutions.core.entity.dao.TopicDao;
import zw.co.hisolutions.core.service.TopicService;
 
@Service
@Transactional
public class TopicServiceImpl implements TopicService {
    private final TopicDao topicDao;

    @Autowired
    public TopicServiceImpl(TopicDao courseTopicDao ){ 
        this.topicDao = courseTopicDao;
    }
    
     @Override
    public Topic findByName(String name) {
        return topicDao.getByName(name);
    } 

    @Override
    public JpaRepository<Topic, Long> getDao() {
       return this.topicDao;
    }

    @Override
    public Class getController() {
       return TopicController.class;
    }
}
