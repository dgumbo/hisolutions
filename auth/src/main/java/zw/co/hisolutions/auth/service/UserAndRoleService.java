package zw.co.hisolutions.auth.service;

import org.springframework.security.core.userdetails.UserDetailsService;
import zw.co.hisolutions.common.service.GenericService;
import zw.co.hisolutions.auth.entity.UserRole;
import zw.co.hisolutions.auth.entity.User;

/**
 *
 * @author dgumbo
 */
public interface UserAndRoleService extends GenericService<User, Long>, UserDetailsService{
    User createUser(User user);
    UserRole createAuthority(UserRole authority);

    public User findUserByUsername(String username);
}
