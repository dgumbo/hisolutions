package zw.co.hisolutions.auth.entity.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import zw.co.hisolutions.auth.entity.MenuRoles;

/**
 *
 * @author dgumbo
 */
public interface RoleMenuDao extends JpaRepository<MenuRoles, Long>{
    
}
