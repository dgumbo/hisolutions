package zw.co.hisolutions.security.dao;
 
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import zw.co.hisolutions.security.entity.User;
 

@Repository
public interface UserDao extends JpaRepository<User, Long> {
	public	User findByUsername(String username);
}
