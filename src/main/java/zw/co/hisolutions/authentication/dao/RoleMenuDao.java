package zw.co.hisolutions.authentication.dao;

import java.util.List;
 
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository; 
import zw.co.hisolutions.authentication.entity.RoleMenu;

@Repository
public interface RoleMenuDao extends JpaRepository<RoleMenu, Long> {
	List<RoleMenu> findByRoleId(Long roleID);

    public void save(List<RoleMenu> roleMenu);

}
