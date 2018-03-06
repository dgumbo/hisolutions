package zw.co.hisolutions.core.entity.dao;

import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Repository; 
import zw.co.hisolutions.core.entity.Skill;

/**
 *
 * @author denzil
 */
@Repository
public interface SkillDao extends JpaRepository<Skill, Long>{ 

    public Skill getByName(String name); 
    
}
