package zw.co.hisolutions.core.service;
 
import zw.co.hisolutions.core.entity.ServiceCategory;
import zw.co.hisolutions.core.common.basic.service.GenericService;

public interface ServiceCategoryService extends GenericService<ServiceCategory, Long>{
    public ServiceCategory findByName(String name);   
}
