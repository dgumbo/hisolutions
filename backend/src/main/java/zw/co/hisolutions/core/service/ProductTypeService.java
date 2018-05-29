package zw.co.hisolutions.core.service;
 
import zw.co.hisolutions.core.entity.ProductType;
import zw.co.hisolutions.common.service.GenericService;

public interface ProductTypeService extends GenericService<ProductType, Long>{
    public ProductType findByName(String name);   
}
