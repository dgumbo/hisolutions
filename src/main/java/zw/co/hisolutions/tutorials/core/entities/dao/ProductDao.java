/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package zw.co.hisolutions.tutorials.core.entities.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import zw.co.hisolutions.tutorials.core.entities.Product;

/**
 *
 * @author denzil
 */
@Repository
public interface ProductDao extends CrudRepository<Product, Long>{ 

    public Product getByName(String name); 
    
}
