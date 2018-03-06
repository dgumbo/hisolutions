/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package zw.co.hisolutions.util;

import javax.persistence.Query;


/**
 *
 * @author denzil
 */
public class Utils {
    Query nQuery;
    
    public Utils(){
    String queryString = nQuery.unwrap(org.hibernate.Query.class).getQueryString();
    }
}
