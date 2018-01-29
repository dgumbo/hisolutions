package zw.co.hisolutions.core.entity.service.impl;

import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service; 
import zw.co.hisolutions.core.controllers.rest.VendorController;
import zw.co.hisolutions.core.entity.Vendor;
import zw.co.hisolutions.core.entity.dao.VendorDao;
import zw.co.hisolutions.core.entity.service.VendorService;

@Repository
@Service
@Transactional
public class VendorServiceImpl implements VendorService {
    private final VendorDao vendorDao;

    @Autowired
    public VendorServiceImpl(VendorDao vendorDao ){ 
        this.vendorDao = vendorDao;
    }
    
     @Override
    public Vendor findByName(String name) {
        return vendorDao.getByName(name);
    } 

    @Override
    public JpaRepository<Vendor, Long> getDao() {
       return this.vendorDao;
    }

    @Override
    public Class getController() {
       return VendorController.class;
    }
}
