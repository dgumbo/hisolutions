package zw.co.hisolutions.core.entity.service;
 
import zw.co.hisolutions.core.entity.Skill;
import zw.co.hisolutions.core.common.basic.service.BasicService;

public interface SkillService extends BasicService<Skill>{
    public Skill findByName(String name);   
}
