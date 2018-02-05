package zw.co.hisolutions.security.service;

import java.util.List; 
import zw.co.hisolutions.security.entity.Role;
import zw.co.hisolutions.security.entity.RoleMenu;
import zw.co.hisolutions.core.common.basic.service.BasicListService;

public interface RoleService extends BasicListService<Role, RoleMenu>{
	public List<Role> getActive();
	public List<RoleMenu> getRoleMenuByID(Long roleID); 
}
