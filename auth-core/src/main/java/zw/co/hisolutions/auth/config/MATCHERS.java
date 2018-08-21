package zw.co.hisolutions.auth.config;

import java.util.Map;
import org.springframework.http.HttpMethod;

/**
 *
 * @author dgumbo
 */
//@Service
public class MATCHERS {

    public static final String[] PUBLIC_UNPROTECTED = { 
        "/init/**",
        "/users/**",
        "/views/rest/**",
        "/storage/**",
        "/login",
        "/logout", 
        "/**.css",
        "/**.eot",
        "/**.svg",
        "/**.woff2",
        "/**.ttf",
        "/**.woff", 
        "/**.js",
        "/**.ico",
        "/assets/**", 
        "/",
        "/auth/**",
        "/jwtauth", 
        "/jwtauth/**",
        "/index",  
        "/index.html"
    };

    public static final String[] REST_PROTECTED = {
        "/rest/**"
    };

    public static final String[] OTHER_PROTECTED = { 
        "/admin/**"
    };
    
    public static Map<HttpMethod, String>[] roleMenu;

}
