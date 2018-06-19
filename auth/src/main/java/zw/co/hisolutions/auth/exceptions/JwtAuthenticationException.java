package zw.co.hisolutions.auth.exceptions;

/**
 *
 * @author dgumbo
 */
public class JwtAuthenticationException extends RuntimeException {
    public JwtAuthenticationException(String message, Throwable cause) {
        super(message, cause);
    }
}
