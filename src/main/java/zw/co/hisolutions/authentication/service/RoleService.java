package zw.co.hisolutions.authentication.service;

import java.util.List; 
import zw.co.hisolutions.authentication.entity.Role;
import zw.co.hisolutions.authentication.entity.RoleMenu;
import zw.co.hisolutions.common.basic.service.BasicListService;

public interface RoleService extends BasicListService<Role, RoleMenu>{
	public List<Role> getActive();
	public List<RoleMenu> getRoleMenuByID(Long roleID); 
}
