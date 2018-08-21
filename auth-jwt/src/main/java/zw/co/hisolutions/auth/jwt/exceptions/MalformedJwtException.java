package zw.co.hisolutions.auth.jwt.exceptions;


public class MalformedJwtException extends RuntimeException {
    public MalformedJwtException(String message) {
        super(message);
    }
}
