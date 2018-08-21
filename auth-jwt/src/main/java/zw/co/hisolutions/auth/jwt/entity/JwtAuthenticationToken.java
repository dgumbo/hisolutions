package zw.co.hisolutions.auth.jwt.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 *
 * @author dgumbo
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class JwtAuthenticationToken {

    private String token; 
    
}
