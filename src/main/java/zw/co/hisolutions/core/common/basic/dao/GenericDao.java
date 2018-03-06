/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package zw.co.hisolutions.core.common.basic.dao;

import java.io.Serializable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository; 
import zw.co.hisolutions.core.common.basic.entity.BaseEntity;

/**
 *
 * @author denzil
 * @param <T> 
 * @param <ID> 
 */
@Repository
public interface GenericDao<T extends BaseEntity, ID extends Serializable>  extends JpaRepository<T, Long>{  
    
}
