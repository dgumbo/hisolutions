package zw.co.hisolutions.backend.core.entity;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import zw.co.hisolutions.common.entity.BaseEntity;

/**
 *
 * @author denzil
 */
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor 
public class Benefit extends BaseEntity implements Serializable{
      
    @NotNull 
    private String name;     
}
