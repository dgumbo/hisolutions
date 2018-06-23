package zw.co.hisolutions.backend.core.service;
 
import zw.co.hisolutions.backend.core.entity.Skill;
import zw.co.hisolutions.common.service.GenericService;

public interface SkillService extends GenericService<Skill, Long>{
    public Skill findByName(String name);   
}
