package zw.co.hisolutions.auth.controllers;

import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken; 
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;  
import zw.co.hisolutions.auth.service.UserAndRoleService;
import zw.co.hisolutions.auth.exceptions.JwtAuthenticationException; 

@RestController
@RequestMapping("${jwt.route.controller.path}")
public class JwtAuthController {

    @Value("${jwt.header}")
    private String tokenHeader;

    private final AuthenticationManager authenticationManager;
    //private final JwtUtil jwtTokenUtil;
    private final UserAndRoleService userDetailsService;

    @Autowired 
    public JwtAuthController(AuthenticationManager authenticationManager/*, JwtUtil jwtTokenUtil*/, UserAndRoleService userDetailsService) {
        this.authenticationManager = authenticationManager;
        //this.jwtTokenUtil = jwtTokenUtil;
        this.userDetailsService = userDetailsService;
    }

//    @RequestMapping(value = "${jwt.route.authentication.path}", method = RequestMethod.POST)
//    public ResponseEntity<?> createAuthenticationToken(@RequestBody User user) throws JwtAuthenticationException {
//        //System.out.println("zw.co.hisolutions.auth.controllers.JwtAuthController.createAuthenticationToken()");
//        
//        //System.out.println("user.getUsername() : " + user.getUsername());
//        //System.out.println("user.getPassword() : " + user.getPassword());
//        
//        authenticate(user.getUsername(), user.getPassword());
//
//        // Reload password post-security so we can generate the token
//        final User  userDetails = userDetailsService.findUserByUsername(user.getUsername());
//        final String token = jwtTokenUtil.generateToken(userDetails);
//
//        // Return the token
//        return ResponseEntity.ok(new JwtAuthenticationToken (token));
//    }

//    @RequestMapping(value = "${jwt.route.authentication.refresh}", method = RequestMethod.GET)
//    public ResponseEntity<?> refreshAndGetAuthenticationToken(HttpServletRequest request) {
//        //System.out.println("zw.co.hisolutions.auth.controllers.JwtAuthController.refreshAndGetAuthenticationToken()");
//        
//        String authToken = request.getHeader(tokenHeader);
//        final String token = authToken.substring(7);
//        String username = jwtTokenUtil.getUsernameFromToken(token);
//        User user = (User) userDetailsService.loadUserByUsername(username);
//
//        if (jwtTokenUtil.canTokenBeRefreshed(token, user.getLastPasswordResetDate())) {
//            String refreshedToken = jwtTokenUtil.refreshToken(token);
//            return ResponseEntity.ok(new JwtAuthenticationToken(refreshedToken));
//        } else {
//            return ResponseEntity.badRequest().body(null);
//        }
//    }

    @ExceptionHandler({JwtAuthenticationException.class})
    public ResponseEntity<String> handleAuthenticationException(JwtAuthenticationException e) {
        //System.out.println("zw.co.hisolutions.auth.controllers.JwtAuthController.handleAuthenticationException()");
        throw new JwtAuthenticationException("User is disabled!", e);
        //return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
    }

    /**
     * Authenticates the user. If something is wrong, an {@link JwtAuthenticationException} will be thrown
     */
    private void authenticate(String username, String password) {
        try {Objects.requireNonNull(username);} 
        catch ( Exception e) { throw new JwtAuthenticationException("Username cannot be null!", e); }
        try {Objects.requireNonNull(password);} 
        catch ( Exception e) { throw new JwtAuthenticationException("Password cannot be null!", e); }

        try {
            //authenticationManager.authenticate(new JwtAuthenticationToken(username, password));
            System.out.println("\n\nBefore Auth");
            UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(username, password);
            System.out.println("auth.isAuthenticated() : " + auth.isAuthenticated()) ;
            authenticationManager.authenticate(auth);
            System.out.println("auth.isAuthenticated() : " + auth.isAuthenticated()) ;
            System.out.println("After Auth\n\n");
        } catch (DisabledException e) {
            throw new JwtAuthenticationException("User is disabled!", e);
        } catch (BadCredentialsException e) {
            throw new JwtAuthenticationException("Bad credentials!", e);
        }
    }
}
