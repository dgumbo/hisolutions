package zw.co.hisolutions.core.security.authentication.provider;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import java.io.UnsupportedEncodingException;
import org.springframework.stereotype.Component;
import zw.co.hisolutions.core.security.entity.User;

/**
 *
 * @author denzil
 */
@Component
public class JwtValidator {

    private String secret = "secret";

    public User validate(String token) {
        User user = null;

        try {
            Algorithm algorithm = Algorithm.HMAC512(secret);
            JWTVerifier verifier = JWT.require(algorithm)
                    .withIssuer("auth0") 
                    .build(); //Reusable verifier instance
            
            DecodedJWT jwt = verifier.verify(token);

            user = new User();
            user.setUsername(jwt.getSubject()); 
            //jwtUser.setRole((String)body.get("role"));
        } catch (UnsupportedEncodingException | JWTVerificationException exception) {
            //UTF-8 encoding not supported
            //Invalid signature/claims
        }

//        try {
//            Claims body = Jwts.parser()
//                    .setSigningKey(secret)
//                    .parseClaimsJws(token)
//                    .getBody();
//
//            jwtUser = new User();
//            jwtUser.setUsername(body.getSubject());
//            jwtUser.setId(Long.parseLong((String) body.get("userId")));
//            //jwtUser.setRole((String)body.get("role"));
//        } catch (Exception e) {
//            System.out.println(e.getMessage());
//        }

        return user;
    }
}
