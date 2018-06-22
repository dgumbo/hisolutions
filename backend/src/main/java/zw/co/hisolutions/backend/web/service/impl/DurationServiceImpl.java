package zw.co.hisolutions.backend.web.service.impl;

import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Service; 
import zw.co.hisolutions.backend.rest.controllers.DurationController;
import zw.co.hisolutions.backend.web.entity.Duration;
import zw.co.hisolutions.backend.web.entity.dao.DurationDao;
import zw.co.hisolutions.backend.web.service.DurationService;

@Service
@Transactional
public class DurationServiceImpl implements DurationService {
    private final DurationDao durationDao;

    @Autowired
    public DurationServiceImpl(DurationDao durationDao ){ 
        this.durationDao = durationDao;
    }
    
     @Override
    public Duration findByName(String name) {
        return durationDao.getByName(name);
    } 

    @Override
    public JpaRepository<Duration, Long> getDao() {
       return this.durationDao;
    }

    @Override
    public Class getController() {
       return DurationController.class;
    }
}
