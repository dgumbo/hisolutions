package zw.co.hisolutions.core.service;
 
import zw.co.hisolutions.core.entity.Skill;
import zw.co.hisolutions.core.common.basic.service.GenericService;

public interface SkillService extends GenericService<Skill, Long>{
    public Skill findByName(String name);   
}
