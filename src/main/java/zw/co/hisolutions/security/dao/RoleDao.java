package zw.co.hisolutions.security.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository; 
import zw.co.hisolutions.security.entity.Role;

@Repository
public interface RoleDao extends JpaRepository<Role, Long> {
	List<Role> findByActiveStatusTrue(); 

}