package zw.co.hisolutions.auth.jwt.exceptions;


public class JwtExpirationException extends RuntimeException {
    public JwtExpirationException(String message) {
        super(message);
    }
}
