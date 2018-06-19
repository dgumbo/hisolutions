package zw.co.hisolutions.auth.jwt.providers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.authentication.dao.AbstractUserDetailsAuthenticationProvider;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component; 
import zw.co.hisolutions.auth.exceptions.JwtTokenMalformedException;
import zw.co.hisolutions.auth.jwt.token.JwtAuthenticationToken; 
import zw.co.hisolutions.auth.entity.User;
import zw.co.hisolutions.auth.jwt.util.JwtUtil;

/**
 *
 * @author dgumbo
 */
@Component
public class JwtAuthenticationProvider extends AbstractUserDetailsAuthenticationProvider{
 
    private final JwtUtil jwtUtil ;

    @Autowired
    public JwtAuthenticationProvider(JwtUtil jwtUtil) {
        this.jwtUtil = jwtUtil;
    }       
    
    @Override
    public boolean supports(Class<?> authentication) {
        return JwtAuthenticationToken.class.isAssignableFrom(authentication);
    }

    @Override
    protected void additionalAuthenticationChecks(UserDetails userDetails, UsernamePasswordAuthenticationToken authentication) throws AuthenticationException {        
    } 

    @Override
    protected UserDetails retrieveUser(String username, UsernamePasswordAuthenticationToken authentication) throws AuthenticationException {
        JwtAuthenticationToken jwtAuthenticationToken = (JwtAuthenticationToken) authentication;
        String token = jwtAuthenticationToken.getToken();

        String parsedUsername = jwtUtil.getUsernameFromToken(token); 
 
        if (parsedUsername == null) {
            throw new JwtTokenMalformedException("JWT token is not valid");
        } 
        
        User parsedUser = jwtUtil.verifyToken(token);
        
        return parsedUser;
    }    
}
