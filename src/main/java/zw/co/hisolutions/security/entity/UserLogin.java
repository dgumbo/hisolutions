package zw.co.hisolutions.security.entity ;

import java.util.Collection;
import lombok.Data; 
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

@Data
public class UserLogin extends User {

    private Long roleID;
    private String unitCode;
    private Long userID;
    private String ip;
    private String broswer;

    public UserLogin(String username, String password, Collection<? extends GrantedAuthority> authorities) {
        super(username, password, authorities);
        // TODO Auto-generated constructor stub
    }

}
