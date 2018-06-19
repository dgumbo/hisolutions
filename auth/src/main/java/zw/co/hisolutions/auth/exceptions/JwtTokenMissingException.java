package zw.co.hisolutions.auth.exceptions;

import io.jsonwebtoken.JwtException;

/**
 *
 * @author dgumbo
 */
public class JwtTokenMissingException extends JwtException { 
    
    public JwtTokenMissingException(String message) {
        super(message);
    }    
}
