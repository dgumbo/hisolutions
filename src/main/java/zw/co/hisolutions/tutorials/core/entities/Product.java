/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package zw.co.hisolutions.tutorials.core.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.RequiredArgsConstructor;
import zw.co.hisolutions.core.entities.basic.BaseEntity;

/**
 *
 * @author denzil
 */
@Entity
@Data
@RequiredArgsConstructor
public class Product extends BaseEntity implements Serializable{
    @Column
    private String name;
    
    @Column    
    private String description;
    
    @Column
    private double price;    
    
}
