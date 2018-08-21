package zw.co.hisolutions.auth.jwt.controller;
 
import java.io.IOException;
import java.security.SignatureException;
import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import static org.springframework.web.bind.annotation.RequestMethod.POST;
import org.springframework.web.bind.annotation.RestController;
import zw.co.hisolutions.auth.entity.User;  
import zw.co.hisolutions.auth.jwt.exceptions.JwtAuthenticationException;
import zw.co.hisolutions.auth.jwt.entity.JwtAuthenticationToken; 
import zw.co.hisolutions.auth.jwt.util.JwtTokenUtil;
import zw.co.hisolutions.auth.service.UsersService;

//@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("jwtauth") //("${jwt.route.controller.path}")
public class JwtAuthController {

    private final AuthenticationManager authenticationManager;
    private final JwtTokenUtil jwtUtils;
    private final UsersService userDetailsService;

    @Autowired
    public JwtAuthController(AuthenticationManager authenticationManager, JwtTokenUtil jwtTokenUtil, UsersService userDetailsService) {
        this.authenticationManager = authenticationManager;
        this.jwtUtils = jwtTokenUtil;
        this.userDetailsService = userDetailsService;
    }

    @RequestMapping(method = POST)
    public ResponseEntity<?> authenticationRequest(@RequestBody User authenticationRequest)
            throws AuthenticationException, IOException {
        
        System.out.println("zw.co.hisolutions.jwt_auth.security.controllers.AuthenticationController.authenticationRequest()");
        
        String username = authenticationRequest.getUsername();
        String password = authenticationRequest.getPassword();

        // throws authenticationException if it fails !
        Authentication authentication = this.authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(username, password)
        );
        SecurityContextHolder.getContext().setAuthentication(authentication); 

        String token = jwtUtils.doGenerateToken(username, authentication.getAuthorities());

        // Return the token
        return ResponseEntity.ok(new JwtAuthenticationToken(token));
    }


     
    @GetMapping("/getAll")
    public List<User> login( ) {
        System.out.println("zw.co.hisolutions.auth.controller.UsersController.login()");
        
        return userDetailsService.findAll() ;
    } 
     
//    @GetMapping("/auth")
//    public List<User> auth( ) {
//        System.out.println("zw.co.hisolutions.auth.controller.UsersController.login()");
//        
//        return userDetailsService.findAll() ;
//    } 

    @PostMapping("/auth") //"${jwt.route.authentication.path}")
    public ResponseEntity<?> loginAndCreateAuthenticationToken(@RequestBody User user) { //throws JwtAuthenticationException {
        System.out.println("zw.co.hisolutions.auth.controllers.JwtAuthController.createAuthenticationToken()");

        //System.out.println("user.getUsername() : " + user.getUsername());
        //System.out.println("user.getPassword() : " + user.getPassword());
        authenticate(user.getUsername(), user.getPassword());

        // Reload password post-security so we can generate the token
        final User authenticatedUser = userDetailsService.findUserByUsername(user.getUsername());
        final String token = jwtUtils.generateToken(authenticatedUser);

        // Return the token
        return ResponseEntity.ok(new JwtAuthenticationToken(token));
    }

//    @PostMapping("/logout") //"${jwt.route.authentication.path}")
//    public ResponseEntity<?> logout( ) { //throws JwtAuthenticationException {
//        System.out.println("zw.co.hisolutions.auth.controllers.JwtAuthController.createAuthenticationToken()");
//
//        //System.out.println("user.getUsername() : " + user.getUsername());
//        //System.out.println("user.getPassword() : " + user.getPassword()); 
//
//        // Reload password post-security so we can generate the token
//        final User authenticatedUser = userDetailsService.findUserByUsername(user.getUsername());
//        final String token = jwtUtils.generateToken(authenticatedUser);
//
//        // Return the token
//        return ResponseEntity.ok(new JwtAuthenticationToken(token));
//    }

//    @GetMapping("${jwt.route.authentication.refresh}")
//    public ResponseEntity<?> refreshAndGetAuthenticationToken(HttpServletRequest request) {
//        //System.out.println("zw.co.hisolutions.auth.controllers.JwtAuthController.refreshAndGetAuthenticationToken()");
//
//        String header = request.getHeader(HEADER_STRING);
//        final String authToken = header.replace(TOKEN_PREFIX, "");
//        String username = jwtUtils.getUsernameFromToken(authToken);
//        User user = (User) userDetailsService.loadUserByUsername(username);
//
//        if (jwtUtils.canTokenBeRefreshed(authToken, user.getLastPasswordResetDate())) {
//            String refreshedToken = jwtUtils.refreshToken(authToken);
//            return ResponseEntity.ok(new JwtAuthenticationToken(refreshedToken));
//        } else {
//            return ResponseEntity.badRequest().body(null);
//        }
//    }

    @ExceptionHandler({JwtAuthenticationException.class})
    public ResponseEntity<String> handleAuthenticationException(JwtAuthenticationException e) {
        System.out.println("zw.co.hisolutions.auth.controllers.JwtAuthController.handleAuthenticationException()");
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
    }

//    @ExceptionHandler({ExpiredJwtException.class})
//    public ResponseEntity<String> handleAuthenticationException(ExpiredJwtException e) {
//        System.out.println("zw.co.hisolutions.auth.controllers.JwtAuthController.handleAuthenticationException()");
//        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
//    }

    @ExceptionHandler({SignatureException.class})
    public ResponseEntity<String> handleAuthenticationException(SignatureException e) {
        System.out.println("zw.co.hisolutions.auth.controllers.JwtAuthController.handleAuthenticationException()");
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
    }

    /**
     * Authenticates the user. If something is wrong, an
     * {@link JwtAuthenticationException} will be thrown
     */
    private void authenticate(String username, String password) {
        try {
            Objects.requireNonNull(username);
        } catch (Exception e) {
            throw new JwtAuthenticationException("Username cannot be null!", e);
        }
        try {
            Objects.requireNonNull(password);
        } catch (Exception e) {
            throw new JwtAuthenticationException("Password cannot be null!", e);
        }

        try {
            UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(username, password);
            authenticationManager.authenticate(auth);
            SecurityContextHolder.getContext().setAuthentication(auth);
        } catch (DisabledException e) {
            throw new JwtAuthenticationException("User is disabled!", e);
        } catch (BadCredentialsException e) {
            throw new JwtAuthenticationException("Bad credentials!", e);
        }
    }
}
