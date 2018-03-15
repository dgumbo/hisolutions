package zw.co.hisolutions.documents.exceptions;

/**
 *
 * @author denzil
 */    
public class NullFilenameException extends RuntimeException {

    public NullFilenameException(String message) {
        super(message);
    }

    public NullFilenameException(String message, Throwable cause) {
        super(message, cause);
    }
}
