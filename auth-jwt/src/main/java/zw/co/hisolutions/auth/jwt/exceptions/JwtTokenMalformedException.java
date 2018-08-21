package zw.co.hisolutions.auth.jwt.exceptions;

import io.jsonwebtoken.JwtException;

/**
 *
 * @author dgumbo
 */
public class JwtTokenMalformedException extends JwtException { 
    
    public JwtTokenMalformedException(String message) {
        super(message);
    }
    
}
