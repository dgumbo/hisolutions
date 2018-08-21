package zw.co.hisolutions.auth.jwt.exceptions;


public class JwtBadSignatureException extends RuntimeException {
    public JwtBadSignatureException(String message) {
        super(message);
    }
}
