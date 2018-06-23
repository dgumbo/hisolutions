package zw.co.hisolutions.backend.core.service;
 
import zw.co.hisolutions.backend.core.entity.Vendor;
import zw.co.hisolutions.common.service.GenericService;

public interface VendorService extends GenericService<Vendor, Long>{
    public Vendor findByName(String name);   
}
