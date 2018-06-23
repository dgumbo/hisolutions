package zw.co.hisolutions.auth.controllers;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.SignatureException;
import java.util.Objects;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import zw.co.hisolutions.auth.entity.User;
import zw.co.hisolutions.auth.exceptions.JwtAuthenticationException;
import static zw.co.hisolutions.auth.jwt.Constants.HEADER_STRING;
import static zw.co.hisolutions.auth.jwt.Constants.TOKEN_PREFIX;
import zw.co.hisolutions.auth.jwt.JwtTokenUtil;
import zw.co.hisolutions.auth.jwt.tokens.JwtAuthenticationToken;
import zw.co.hisolutions.auth.service.UsersService;

//@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("${jwt.route.controller.path}")
public class JwtAuthController {

    private final AuthenticationManager authenticationManager;
    private final JwtTokenUtil jwtTokenUtil;
    private final UsersService userDetailsService;

    @Autowired
    public JwtAuthController(AuthenticationManager authenticationManager, JwtTokenUtil jwtTokenUtil, UsersService userDetailsService) {
        this.authenticationManager = authenticationManager;
        this.jwtTokenUtil = jwtTokenUtil;
        this.userDetailsService = userDetailsService;
    }

    @PostMapping(value = "${jwt.route.authentication.path}")
    public ResponseEntity<?> loginAndCreateAuthenticationToken(@RequestBody User user) throws JwtAuthenticationException {
        System.out.println("zw.co.hisolutions.auth.controllers.JwtAuthController.createAuthenticationToken()");

        //System.out.println("user.getUsername() : " + user.getUsername());
        //System.out.println("user.getPassword() : " + user.getPassword());
        authenticate(user.getUsername(), user.getPassword());

        // Reload password post-security so we can generate the token
        final User authenticatedUser = userDetailsService.findUserByUsername(user.getUsername());
        final String token = jwtTokenUtil.generateToken(authenticatedUser);

        // Return the token
        return ResponseEntity.ok(new JwtAuthenticationToken(token));
    }

    @GetMapping(value = "${jwt.route.authentication.refresh}")
    public ResponseEntity<?> refreshAndGetAuthenticationToken(HttpServletRequest request) {
        //System.out.println("zw.co.hisolutions.auth.controllers.JwtAuthController.refreshAndGetAuthenticationToken()");

        String header = request.getHeader(HEADER_STRING);
        final String authToken = header.replace(TOKEN_PREFIX, "");
        String username = jwtTokenUtil.getUsernameFromToken(authToken);
        User user = (User) userDetailsService.loadUserByUsername(username);

        if (jwtTokenUtil.canTokenBeRefreshed(authToken, user.getLastPasswordResetDate())) {
            String refreshedToken = jwtTokenUtil.refreshToken(authToken);
            return ResponseEntity.ok(new JwtAuthenticationToken(refreshedToken));
        } else {
            return ResponseEntity.badRequest().body(null);
        }
    }

    @ExceptionHandler({JwtAuthenticationException.class})
    public ResponseEntity<String> handleAuthenticationException(JwtAuthenticationException e) {
        System.out.println("zw.co.hisolutions.auth.controllers.JwtAuthController.handleAuthenticationException()");
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
    }

    @ExceptionHandler({ExpiredJwtException.class})
    public ResponseEntity<String> handleAuthenticationException(ExpiredJwtException e) {
        System.out.println("zw.co.hisolutions.auth.controllers.JwtAuthController.handleAuthenticationException()");
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
    }

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
