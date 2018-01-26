/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package zw.co.hisolutions.core.security.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
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
@Table(name = "location")
public class Location extends BaseEntity {

    @NotNull
    @Column(unique = true)
    public String name; 
    
}
