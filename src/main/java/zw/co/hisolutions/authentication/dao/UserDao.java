package zw.co.hisolutions.authentication.dao;
 
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import zw.co.hisolutions.authentication.entity.User;
 

@Repository
public interface UserDao extends JpaRepository<User, Long> {
	public	User findByUsername(String username);
}
