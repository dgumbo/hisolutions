package zw.co.hisolutions.backend.core.service;
 
import zw.co.hisolutions.backend.core.entity.ProductType;
import zw.co.hisolutions.common.service.GenericService;

public interface ProductTypeService extends GenericService<ProductType, Long>{
    public ProductType findByName(String name);   
}
