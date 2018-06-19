/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package zw.co.hisolutions.auth.jwt;

import org.springframework.beans.factory.annotation.Value;

/**
 *
 * @author dgumbo
 */
public class SecurityConstants {
    
        @Value("${jwt.secret}")
	public static String SECRET; // = "SecretKeyToGenJWTs";
	
        public static final long EXPIRATION_TIME = 864_000_000; // 10 days
	public static final String TOKEN_PREFIX = "Token ";
	public static final String HEADER_STRING = "Authorization";
	public static final String SIGN_UP_URL = "/users/sign-up";    
}
