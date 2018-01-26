/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package zw.co.hisolutions.core.security.authentication.provider;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.impl.NullClaim;
import com.auth0.jwt.interfaces.Claim;
import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.Map;
import org.springframework.stereotype.Service;
import zw.co.hisolutions.core.security.entity.User;

/**
 *
 * @author denzil
 */
@Service
public class JwtGenerator {
    
    private String secret = "secret";

    public String generate(String username) {
        String token = null;
        try { 

            Algorithm algorithm = Algorithm.HMAC512(secret);
            token = JWT.create()
                    .withIssuer("auth0")
                    .withSubject(username) 
                    .withClaim("username", username) 
                    .withClaim("role", "Admin")  
                    .sign(algorithm)
                    
                    ;
        } catch (UnsupportedEncodingException | JWTCreationException exception) {
            //UTF-8 encoding not supported
            //Invalid Signing configuration / Couldn't convert Claims.
        } 

//       Claims claims = Jwts.claims()
//               .setSubject(username);
//       
//       claims.put("username", username) ;
//       claims.put("role", "Admin") ;
//       
//       return Jwts.builder()
//               .setClaims(claims)
//               .signWith(SignatureAlgorithm.HS512, "secret") 
//               .compact()
//               ;
        return token;
    }

    public String generate(User user) {
        return generate(user.getUsername());
    }

}
