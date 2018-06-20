package zw.co.hisolutions.backend.web.service;
 
import zw.co.hisolutions.backend.web.entity.Skill;
import zw.co.hisolutions.common.service.GenericService;

public interface SkillService extends GenericService<Skill, Long>{
    public Skill findByName(String name);   
}
