package zw.co.hisolutions.core.service.impl;

import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Service; 
import zw.co.hisolutions.core.controllers.rest.AudianceController;
import zw.co.hisolutions.core.entity.Audiance; 
import zw.co.hisolutions.core.entity.dao.AudianceDao;
import zw.co.hisolutions.core.service.AudianceService;
 
@Service
@Transactional
public class AudianceServiceImpl implements AudianceService {
     private final AudianceDao audianceDao; 
      
    @Autowired
    public AudianceServiceImpl(AudianceDao audianceDao ){  
        this.audianceDao = audianceDao;
    }
    
     @Override
    public Audiance findByName(String name) {
        // return audianceDao.getByName(name);
        return null ;
    } 

    @Override
    public JpaRepository<Audiance, Long> getDao() {
       return this.audianceDao;
    }

    @Override
    public Class getController() {
       return AudianceController.class;
    }
}
