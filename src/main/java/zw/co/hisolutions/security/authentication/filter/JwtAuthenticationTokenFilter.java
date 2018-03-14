//package zw.co.hisolutions.security.authentication.filter;
//
//import java.io.IOException;
//import javax.servlet.FilterChain;
//import javax.servlet.ServletException;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.AuthenticationException;
//import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;
//import zw.co.hisolutions.security.authentication.provider.JwtAuthenticationToken;
//
///**
// *
// * @author denzil
// */
//public class JwtAuthenticationTokenFilter extends AbstractAuthenticationProcessingFilter {
//
//    public JwtAuthenticationTokenFilter() {
//        super("/rest/**");
//    }
//
//    @Override
//    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException, IOException, ServletException {
//        String header = request.getHeader("Authorization");
//
//        if (header == null || !header.startsWith("Token ")) {
//            throw new RuntimeException("JWT Token is missing.");
//        }
//
//        String authenticationToken = header.substring(6);
//        JwtAuthenticationToken token = new JwtAuthenticationToken(authenticationToken);
//
//        return getAuthenticationManager().authenticate(token);
//    }
//
//    @Override
//    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws IOException, ServletException {
//        super.successfulAuthentication(request, response, chain, authResult); //To change body of generated methods, choose Tools | Templates.
//        chain.doFilter(request, response);
//    }
//
//}
