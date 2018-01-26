package zw.co.hisolutions.authentication.service;

import java.util.List;
import zw.co.hisolutions.authentication.entity.Menu;
import zw.co.hisolutions.authentication.entity.MenuGroup;
import zw.co.hisolutions.common.basic.service.BasicListService;
   
public interface MenuGroupService  extends BasicListService<MenuGroup, Menu>{
public List<MenuGroup> getByRoleID(Long roleID);
public List<Menu> getMenuByID(Long menuGroupID);
public Menu getMenuByMenuID(Long menuID);
public List<Menu> getMenuActive();
}
