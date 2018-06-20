package zw.co.hisolutions.backend.web.service;
 
import zw.co.hisolutions.backend.web.entity.ServiceCategory;
import zw.co.hisolutions.common.service.GenericService;

public interface ServiceCategoryService extends GenericService<ServiceCategory, Long>{
    public ServiceCategory findByName(String name);    
}
