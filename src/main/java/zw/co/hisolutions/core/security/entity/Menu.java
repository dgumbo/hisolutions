package zw.co.hisolutions.core.security.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import lombok.Data;
import lombok.EqualsAndHashCode; 
import zw.co.hisolutions.common.basic.entity.BaseEntity;

/**
 *
 * @author denzil
 */
@Entity
@Data
@EqualsAndHashCode(callSuper = true)
@Table(name = "menu")
public class Menu extends BaseEntity {

    @NotNull
    @Column(unique = true)
    public String name;

    @ManyToOne
    private MenuGroup menuGroup;

    private String menuFunction;
}
