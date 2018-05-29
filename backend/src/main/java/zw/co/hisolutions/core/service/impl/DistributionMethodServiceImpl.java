package zw.co.hisolutions.core.service.impl;

import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Service; 
import zw.co.hisolutions.core.controllers.rest.DistributionMethodController;
import zw.co.hisolutions.core.entity.DistributionMethod;
import zw.co.hisolutions.core.entity.dao.DistributionMethodDao;
import zw.co.hisolutions.core.service.DistributionMethodService;
 
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
