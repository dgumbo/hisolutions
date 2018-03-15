package zw.co.hisolutions.documents;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Data
@NoArgsConstructor
public class GetFileResult {
    private byte byteArray[];
    private Status status;
    private String message;
    private String filename;
    private String mimeType;
}
