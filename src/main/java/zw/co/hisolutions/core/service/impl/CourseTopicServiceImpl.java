package zw.co.hisolutions.core.service.impl;

import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Service; 
import zw.co.hisolutions.core.controllers.rest.CourseTopicController;
import zw.co.hisolutions.core.entity.CourseTopic;
import zw.co.hisolutions.core.entity.dao.CourseTopicDao;
import zw.co.hisolutions.core.service.CourseTopicService;
 
@Service
@Transactional
public class CourseTopicServiceImpl implements CourseTopicService {
    private final CourseTopicDao courseTopicDao;

    @Autowired
    public CourseTopicServiceImpl(CourseTopicDao courseTopicDao ){ 
        this.courseTopicDao = courseTopicDao;
    }
    
     @Override
    public CourseTopic findByName(String name) {
        return courseTopicDao.getByName(name);
    } 

    @Override
    public JpaRepository<CourseTopic, Long> getDao() {
       return this.courseTopicDao;
    }

    @Override
    public Class getController() {
       return CourseTopicController.class;
    }
}
