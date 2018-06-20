package zw.co.hisolutions.auth.jwt.filters;

import java.io.IOException; 
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;  
import zw.co.hisolutions.auth.exceptions.JwtTokenMissingException;
import zw.co.hisolutions.auth.jwt.token.JwtAuthenticationToken; 

/**
 *
 * @author dgumbo
 */ 
public class JwtAuthenticationFilter extends AbstractAuthenticationProcessingFilter{
  
    private final String tokenHeader= "Authorization";
    
    public JwtAuthenticationFilter( ) { 
        super( "/rest/**");
    }   

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
        //org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter ;
        String header = request.getHeader(tokenHeader);

        if (header == null || !header.startsWith("Token ")) {
            throw new JwtTokenMissingException("No JWT token found in request headers");
        }

        String authToken = header.substring(6);

        JwtAuthenticationToken authRequest = new JwtAuthenticationToken(authToken); 
        return getAuthenticationManager().authenticate(authRequest);
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult)            throws IOException, ServletException {
        super.successfulAuthentication(request, response, chain, authResult); 
        chain.doFilter(request, response); 
    } 

    @Override
    public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) throws IOException,
            ServletException {
        HttpServletResponse httpResp = (HttpServletResponse) resp;
        HttpServletRequest httpReq = (HttpServletRequest) req;

        httpResp.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, OPTIONS");
        httpResp.setHeader("Access-Control-Allow-Origin", "*");
        if (httpReq.getMethod().equalsIgnoreCase("OPTIONS")) {
            httpResp.setHeader("Access-Control-Allow-Headers",
                    httpReq.getHeader("Access-Control-Request-Headers"));
        }
        chain.doFilter(req, resp);
    }
    
    
}
