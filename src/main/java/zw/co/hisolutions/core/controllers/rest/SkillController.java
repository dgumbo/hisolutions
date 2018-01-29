package zw.co.hisolutions.core.controllers.rest;
 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import zw.co.hisolutions.core.common.basic.controllers.rest.BaseRestController;
import zw.co.hisolutions.core.entity.Skill; 
import zw.co.hisolutions.core.common.basic.service.BasicService;
import zw.co.hisolutions.core.entity.service.SkillService;

@RestController
@RequestMapping("/rest/skills")
public class SkillController extends BaseRestController<Skill>{

    private  SkillService skillService;
    
    @Autowired
    public SkillController (SkillService skillService) {
        this.skillService = skillService;        
    }

    @Override
    public BasicService getService() {
        return this.skillService ;
    }

    @Override
    public Class getControllerClass() {
       return this.getClass(); }

}
