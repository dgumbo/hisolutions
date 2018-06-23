package zw.co.hisolutions.backend.core.service;
 
import zw.co.hisolutions.backend.core.entity.ServiceCategory;
import zw.co.hisolutions.common.service.GenericService;

public interface ServiceCategoryService extends GenericService<ServiceCategory, Long>{
    public ServiceCategory findByName(String name);    
}
