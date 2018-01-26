/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package zw.co.hisolutions.core.security.authentication.provider;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

/**
 *
 * @author denzil
 */
public class JwtAuthenticationToken extends UsernamePasswordAuthenticationToken {
    
    private String token;
    
    public JwtAuthenticationToken(String token) {
        super(null, null);
        this.token=token;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    @Override
    public Object getCredentials() {
        return null;
    }

    @Override
    public Object getPrincipal() {
        return null;
    }
}
