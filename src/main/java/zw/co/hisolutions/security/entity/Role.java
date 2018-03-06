package zw.co.hisolutions.security.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import lombok.Data;
import lombok.EqualsAndHashCode; 
import zw.co.hisolutions.core.common.basic.entity.BaseEntity;

/**
 *
 * @author denzil
 */
@Entity
@Data
@EqualsAndHashCode(callSuper = true)
@Table(name = "_role")
public class Role extends BaseEntity{
    
    @NotNull
    @Column(unique = true)
    private String name;
    
}

