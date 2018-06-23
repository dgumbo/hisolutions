package zw.co.hisolutions.backend.core.service.impl;

import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Service;
import zw.co.hisolutions.backend.rest.controllers.DurationTypeController;
import zw.co.hisolutions.backend.core.entity.DurationType;
import zw.co.hisolutions.backend.core.entity.dao.DurationTypeDao;
import zw.co.hisolutions.backend.core.service.DurationTypeService;

@Service
@Transactional
public class DurationTypeServiceImpl implements DurationTypeService {
    private final DurationTypeDao durationTypeDao;

    @Autowired
    public DurationTypeServiceImpl(DurationTypeDao durationTypeDao ){ 
        this.durationTypeDao = durationTypeDao;
    }
    
     @Override
    public DurationType findByName(String name) {
        return durationTypeDao.getByName(name);
    } 

    @Override
    public JpaRepository<DurationType, Long> getDao() {
       return this.durationTypeDao;
    }

    @Override
    public Class getController() {
       return DurationTypeController.class;
    }
}
