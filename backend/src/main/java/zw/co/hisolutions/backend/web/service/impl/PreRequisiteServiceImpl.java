package zw.co.hisolutions.backend.web.service.impl;

import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Service; 
import zw.co.hisolutions.backend.rest.controllers.PreRequisiteController;
import zw.co.hisolutions.backend.web.entity.PreRequisite;
import zw.co.hisolutions.backend.web.entity.dao.PreRequisiteDao;
import zw.co.hisolutions.backend.web.service.PreRequisiteService;
 
@Service
@Transactional
public class PreRequisiteServiceImpl implements PreRequisiteService {
    private final PreRequisiteDao preRequisiteDao;

    @Autowired
    public PreRequisiteServiceImpl(PreRequisiteDao preRequisiteDao ){ 
        this.preRequisiteDao = preRequisiteDao;
    }
    
     @Override
    public PreRequisite findByName(String name) {
        return preRequisiteDao.getByName(name);
    } 

    @Override
    public JpaRepository<PreRequisite, Long> getDao() {
       return this.preRequisiteDao;
    }

    @Override
    public Class getController() {
       return PreRequisiteController.class;
    }
}
