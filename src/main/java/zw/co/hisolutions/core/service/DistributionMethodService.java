package zw.co.hisolutions.core.service;
 
import zw.co.hisolutions.core.entity.DistributionMethod;
import zw.co.hisolutions.core.common.basic.service.GenericService;

public interface DistributionMethodService extends GenericService<DistributionMethod, Long>{
    public DistributionMethod findByName(String name);   
}
