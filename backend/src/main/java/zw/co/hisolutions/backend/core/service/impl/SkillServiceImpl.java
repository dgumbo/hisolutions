package zw.co.hisolutions.backend.core.service.impl;

import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Service;
import zw.co.hisolutions.backend.rest.controllers.SkillController;
import zw.co.hisolutions.backend.core.entity.Skill;
import zw.co.hisolutions.backend.core.entity.dao.SkillDao;
import zw.co.hisolutions.backend.core.service.SkillService;
 
@Service
@Transactional
public class SkillServiceImpl implements SkillService {
    private final SkillDao skillDao;

    @Autowired
    public SkillServiceImpl(SkillDao skillDao ){ 
        this.skillDao = skillDao;
    }
    
    @Override
    public Skill findByName(String name) {
        return skillDao.getByName(name);
    } 

    @Override
    public JpaRepository<Skill, Long> getDao() {
       return this.skillDao;
    }

    @Override
    public Class getController() {
        return SkillController.class;
    }
}
