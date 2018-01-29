package zw.co.hisolutions.core.entity.service;
 
import zw.co.hisolutions.core.entity.Vendor;
import zw.co.hisolutions.core.common.basic.service.BasicService;

public interface VendorService extends BasicService<Vendor>{
    public Vendor findByName(String name);   
}
