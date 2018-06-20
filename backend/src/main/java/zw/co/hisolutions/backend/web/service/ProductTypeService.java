package zw.co.hisolutions.backend.web.service;
 
import zw.co.hisolutions.backend.web.entity.ProductType;
import zw.co.hisolutions.common.service.GenericService;

public interface ProductTypeService extends GenericService<ProductType, Long>{
    public ProductType findByName(String name);   
}
