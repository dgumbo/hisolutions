package zw.co.hisolutions.backend.web.service;
 
import zw.co.hisolutions.backend.web.entity.DistributionMethod;
import zw.co.hisolutions.common.service.GenericService;

public interface DistributionMethodService extends GenericService<DistributionMethod, Long>{
    public DistributionMethod findByName(String name);   
}
