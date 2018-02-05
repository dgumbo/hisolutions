package zw.co.hisolutions.core.entity.dao;

import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Repository; 
import zw.co.hisolutions.core.entity.CourseTopic; 

/**
 *
 * @author denzil
 */
@Repository
public interface CourseTopicDao extends JpaRepository<CourseTopic, Long>{ 

    public CourseTopic getByName(String name); 
    
}
