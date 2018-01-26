/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package zw.co.hisolutions.core.common.entity;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import zw.co.hisolutions.common.basic.entity.BaseEntity;

/**
 *
 * @author denzil
 */
@Entity
@Data
@AllArgsConstructor
public class Technology extends BaseEntity implements Serializable{
    
    @NotNull
    @Column
    private String name;
    
    @NotNull
    @JoinColumn(name = "duration_type", referencedColumnName = "id" )    
    private DurationType type;    
}
