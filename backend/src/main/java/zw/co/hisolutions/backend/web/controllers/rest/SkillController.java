package zw.co.hisolutions.backend.web.controllers.rest;
 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import zw.co.hisolutions.common.controllers.rest.BasicRestController;
import zw.co.hisolutions.backend.web.entity.Skill;
import zw.co.hisolutions.backend.web.service.SkillService;
import zw.co.hisolutions.common.service.GenericService;

@RestController
@RequestMapping("/rest/skills")
public class SkillController extends BasicRestController<Skill, Long>{

    private  SkillService skillService;
    
    @Autowired
    public SkillController (SkillService skillService) {
        this.skillService = skillService;        
    }

    @Override
    public GenericService getService() {
        return this.skillService ;
    }

    @Override
    public Class getControllerClass() {
       return this.getClass(); }

}
