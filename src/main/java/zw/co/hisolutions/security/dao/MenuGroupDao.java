package zw.co.hisolutions.security.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import zw.co.hisolutions.security.entity.MenuGroup;
 

@Repository
public interface MenuGroupDao extends JpaRepository<MenuGroup, Long> {

	
}
