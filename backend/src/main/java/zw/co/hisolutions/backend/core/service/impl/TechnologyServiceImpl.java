package zw.co.hisolutions.backend.core.service.impl;

import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Service; 
import zw.co.hisolutions.backend.rest.controllers.TechnologyController;
import zw.co.hisolutions.backend.core.entity.Technology;
import zw.co.hisolutions.backend.core.entity.dao.TechnologyDao;
import zw.co.hisolutions.backend.core.service.TechnologyService;
 
@Service
@Transactional
public class TechnologyServiceImpl implements TechnologyService {
    private final TechnologyDao technologyDao;

    @Autowired
    public TechnologyServiceImpl(TechnologyDao technologyDao ){ 
        this.technologyDao = technologyDao;
    }
    
     @Override
    public Technology findByName(String name) {
        return technologyDao.getByName(name);
    } 

    @Override
    public JpaRepository<Technology, Long> getDao() {
       return this.technologyDao;
    }

    @Override
    public Class getController() {
        return TechnologyController.class;
    }
}
