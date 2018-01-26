package zw.co.hisolutions.core.security.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import zw.co.hisolutions.core.security.entity.MenuGroup;
 

@Repository
public interface MenuGroupDao extends JpaRepository<MenuGroup, Long> {

	
}
