// package zw.co.hisolutions.security.authentication.entrypoint;
//
//import java.io.IOException;
//import javax.servlet.ServletException;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import org.springframework.security.core.AuthenticationException;
//import org.springframework.security.web.AuthenticationEntryPoint;
//import org.springframework.stereotype.Component;
//
///**
// *
// * @author denzil
// */
//@Component
//public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint{
//
//    @Override
//    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {
//        response.sendError(HttpServletResponse.SC_UNAUTHORIZED);
//    }
//    
//}
