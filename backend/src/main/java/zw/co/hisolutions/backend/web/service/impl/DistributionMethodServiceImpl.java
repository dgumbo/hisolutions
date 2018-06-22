package zw.co.hisolutions.backend.web.service.impl;

import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Service; 
import zw.co.hisolutions.backend.rest.controllers.DistributionMethodController;
import zw.co.hisolutions.backend.web.entity.DistributionMethod;
import zw.co.hisolutions.backend.web.entity.dao.DistributionMethodDao;
import zw.co.hisolutions.backend.web.service.DistributionMethodService;
 
@Service
@Transactional
public class DistributionMethodServiceImpl implements DistributionMethodService {
    private final DistributionMethodDao distributionMethodDao;

    @Autowired
    public DistributionMethodServiceImpl(DistributionMethodDao distributionMethodDao ){ 
        this.distributionMethodDao = distributionMethodDao;
    }
    
     @Override
    public DistributionMethod findByName(String name) {
        return distributionMethodDao.getByName(name);
    } 

    @Override
    public JpaRepository<DistributionMethod, Long> getDao() {
       return this.distributionMethodDao;
    }

    @Override
    public Class getController() {
       return DistributionMethodController.class;
    }
}
