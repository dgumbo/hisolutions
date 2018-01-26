package zw.co.hisolutions.core.security.dao;
 
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import zw.co.hisolutions.core.security.entity.User;
 

@Repository
public interface UserDao extends JpaRepository<User, Long> {
	public	User findByUsername(String username);
}
