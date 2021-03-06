package zw.co.hisolutions.backend.core.entity;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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
public class Duration extends BaseEntity implements Serializable{
    
    @Column(unique = true)
    @NotNull 
    private String name;
    
    @NotNull
    @ManyToOne(targetEntity = DurationType.class/*, fetch = FetchType.LAZY*/)
    @JoinColumn(name = "duration_type_id", referencedColumnName = "id" )    
    private DurationType durationType;    
}
