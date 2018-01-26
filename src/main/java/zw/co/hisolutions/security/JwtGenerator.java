/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package zw.co.hisolutions.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import zw.co.hisolutions.authentication.entity.User;

/**
 *
 * @author denzil
 */
public class JwtGenerator {

    public String generate(String username) {
       Claims claims = Jwts.claims()
               .setSubject(username);
       
       claims.put("username", username) ;
       claims.put("role", "Admin") ;
       
       return Jwts.builder()
               .setClaims(claims)
               .signWith(SignatureAlgorithm.HS512, "secret") 
               .compact()
               ;
    }

    public String generate(User user) {
        return generate(user.getUsername());
    }
    
}
