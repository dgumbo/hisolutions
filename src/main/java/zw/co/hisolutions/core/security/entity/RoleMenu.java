package zw.co.hisolutions.core.security.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import lombok.Data; 
import zw.co.hisolutions.common.basic.entity.BaseEntity;

/**
 *
 * @author denzil
 */
@Entity
@Data
@Table(name = "role_menu")
public class RoleMenu extends BaseEntity {
    @ManyToOne
    private Role role;

    @ManyToOne
    private Menu menu;
    private boolean showMenuLink;

    private MenuAction createAction = MenuAction.Restricted;
    private MenuAction editAction = MenuAction.Restricted;
    private MenuAction viewAction = MenuAction.Restricted;
    private MenuAction deleteAction = MenuAction.Restricted;
}
