package zw.co.hisolutions.authentication.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import zw.co.hisolutions.authentication.entity.MenuGroup;
 

@Repository
public interface MenuGroupDao extends JpaRepository<MenuGroup, Long> {

	
}
