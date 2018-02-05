package zw.co.hisolutions.security.dao;

import java.util.List;
 
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository; 
import zw.co.hisolutions.security.entity.RoleMenu;

@Repository
public interface RoleMenuDao extends JpaRepository<RoleMenu, Long> {
	List<RoleMenu> findByRoleId(Long roleID);

    public void save(List<RoleMenu> roleMenu);

}
