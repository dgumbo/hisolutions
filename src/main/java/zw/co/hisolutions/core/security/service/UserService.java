package zw.co.hisolutions.core.security.service;

import java.util.List;  
import org.springframework.hateoas.Resource;
import zw.co.hisolutions.core.security.entity.User;

public interface UserService  {
    
public User findByUsername(String username);

    public Resource<User> buildUserResource(User user);

    public User save(User user);

    public User updateUser(User user);

    public void deleteUser(String username);

    public List<User> findAll();
}