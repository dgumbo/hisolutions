package zw.co.hisolutions.auth.jwt.tokens;

import lombok.Data;

/**
 *
 * @author dgumbo
 */
@Data
public class JwtAuthenticationToken {

    private String token;
    
    public JwtAuthenticationToken(String token) {
        this.token= token;
    }
    
}
