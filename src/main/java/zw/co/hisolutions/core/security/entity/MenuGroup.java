package zw.co.hisolutions.core.security.entity;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Transient;
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
@Table(name = "menu_group")
public class MenuGroup extends BaseEntity {

    @NotNull
    @Column(unique = true)
    private String name;

    @Transient
    List<Menu> menus = new ArrayList<Menu>();

}
