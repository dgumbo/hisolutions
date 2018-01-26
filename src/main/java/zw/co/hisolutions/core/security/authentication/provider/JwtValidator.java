package zw.co.hisolutions.core.security.authentication.provider;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.springframework.stereotype.Component;
import zw.co.hisolutions.authentication.entity.User;

/**
 *
 * @author denzil
 */
@Component
public class JwtValidator {

    private String secret = "secret";

    public User validate(String token) {
        User jwtUser = null;
        try {
            Claims body = Jwts.parser()
                    .setSigningKey(secret)
                    .parseClaimsJws(token)
                    .getBody();

            jwtUser = new User();
            jwtUser.setUsername(body.getSubject());
            jwtUser.setId(Long.parseLong((String) body.get("userId")));
            //jwtUser.setRole((String)body.get("role"));
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }

        return jwtUser;
    }
}
