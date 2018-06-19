package zw.co.hisolutions.auth.jwt.token;
 
import lombok.Getter;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

/**
 *
 * @author dgumbo
 */
@Getter
public class JwtAuthenticationToken extends UsernamePasswordAuthenticationToken{
     
    private String token ;
    
    public JwtAuthenticationToken(String token) {
        super(null, null);
        this.token = token;
    }   
}
