package zw.co.hisolutions.auth.controllers;

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
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController; 
import zw.co.hisolutions.auth.entity.User; 
import zw.co.hisolutions.auth.jwt.token.JwtAuthenticationToken;
import zw.co.hisolutions.auth.service.UserAndRoleService;
import zw.co.hisolutions.auth.exceptions.JwtAuthenticationException;
import zw.co.hisolutions.auth.jwt.util.JwtUtil;

@RestController
@RequestMapping("${jwt.route.controller.path}")
public class JwtAuthenticationController {

    @Value("${jwt.header}")
    private String tokenHeader;

    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtTokenUtil;
    private final UserAndRoleService userDetailsService;

    @Autowired 
    public JwtAuthenticationController(AuthenticationManager authenticationManager, JwtUtil jwtTokenUtil, UserAndRoleService userDetailsService) {
        this.authenticationManager = authenticationManager;
        this.jwtTokenUtil = jwtTokenUtil;
        this.userDetailsService = userDetailsService;
    }

    @RequestMapping(value = "${jwt.route.authentication.path}", method = RequestMethod.POST)
    public ResponseEntity<?> createAuthenticationToken(@RequestBody User user) throws JwtAuthenticationException {

        authenticate(user.getUsername(), user.getPassword());

        // Reload password post-security so we can generate the token
        final User  userDetails = userDetailsService.findUserByUsername(user.getUsername());
        final String token = jwtTokenUtil.generateToken(userDetails);

        // Return the token
        return ResponseEntity.ok(new JwtAuthenticationToken (token));
    }

    @RequestMapping(value = "${jwt.route.authentication.refresh}", method = RequestMethod.GET)
    public ResponseEntity<?> refreshAndGetAuthenticationToken(HttpServletRequest request) {
        String authToken = request.getHeader(tokenHeader);
        final String token = authToken.substring(7);
        String username = jwtTokenUtil.getUsernameFromToken(token);
        User user = (User) userDetailsService.loadUserByUsername(username);

        if (jwtTokenUtil.canTokenBeRefreshed(token, user.getLastPasswordResetDate())) {
            String refreshedToken = jwtTokenUtil.refreshToken(token);
            return ResponseEntity.ok(new JwtAuthenticationToken(refreshedToken));
        } else {
            return ResponseEntity.badRequest().body(null);
        }
    }

    @ExceptionHandler({JwtAuthenticationException.class})
    public ResponseEntity<String> handleAuthenticationException(JwtAuthenticationException e) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
    }

    /**
     * Authenticates the user. If something is wrong, an {@link JwtAuthenticationException} will be thrown
     */
    private void authenticate(String username, String password) {
        Objects.requireNonNull(username);
        Objects.requireNonNull(password);

        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            throw new JwtAuthenticationException("User is disabled!", e);
        } catch (BadCredentialsException e) {
            throw new JwtAuthenticationException("Bad credentials!", e);
        }
    }
}
