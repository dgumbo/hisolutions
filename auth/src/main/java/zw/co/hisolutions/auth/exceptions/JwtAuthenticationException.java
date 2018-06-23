package zw.co.hisolutions.auth.exceptions;

import org.springframework.security.core.AuthenticationException;

/**
 *
 * @author dgumbo
 */
public class JwtAuthenticationException extends AuthenticationException {
    public JwtAuthenticationException(String message, Throwable cause) {
        super(message, cause);
    }
}
