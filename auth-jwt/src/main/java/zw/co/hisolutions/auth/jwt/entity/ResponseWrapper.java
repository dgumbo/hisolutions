package zw.co.hisolutions.auth.jwt.entity;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_NULL;
import zw.co.hisolutions.auth.jwt.exceptions.ErrorMessage;

@Data
@JsonInclude(NON_NULL)
@AllArgsConstructor
@NoArgsConstructor
public class ResponseWrapper { 
    private Object data; 
    private Object metadata; 
    private List<ErrorMessage> errors; 
}
