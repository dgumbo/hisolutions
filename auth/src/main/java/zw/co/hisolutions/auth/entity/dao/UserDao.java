package zw.co.hisolutions.auth.entity.dao;
  
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import zw.co.hisolutions.auth.entity.User;

/**
 *
 * @author dgumbo
 */
@Repository
public interface UserDao extends JpaRepository<User, Long>{
    public User getByUsername(String username) ;
    public User findByUsername(String username) ;
}
