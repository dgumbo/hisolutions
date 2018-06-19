package zw.co.hisolutions.auth.configs;

import java.util.Collections;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter; 
import zw.co.hisolutions.auth.jwt.entrypoints.JwtAuthenticationEntryPoint;
import zw.co.hisolutions.auth.jwt.filters.JwtAuthenticationFilter;
import zw.co.hisolutions.auth.jwt.handlers.JwtSuccessHandler;
import zw.co.hisolutions.auth.jwt.providers.JwtAuthenticationProvider;

/**
 *
 * @author dgumbo
 */
@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
@Order(2)
public class JwtSecurityConfig extends WebSecurityConfigurerAdapter {

    private final JwtAuthenticationProvider authenticationProvider;
    private final JwtAuthenticationEntryPoint entryPoint;
    private final UserDetailsService userDetailsService;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public JwtSecurityConfig(JwtAuthenticationProvider authenticationProvider, JwtAuthenticationEntryPoint entryPoint, UserDetailsService userDetailsService, PasswordEncoder passwordEncoder) {
        this.userDetailsService = userDetailsService;
        this.passwordEncoder = passwordEncoder;
        this.authenticationProvider = authenticationProvider;
        this.entryPoint = entryPoint;
    }

    @Bean
    public JwtAuthenticationFilter authenticationTokenFilter() {
        JwtAuthenticationFilter authFilter = new JwtAuthenticationFilter();
        authFilter.setAuthenticationManager(authenticationManager());
        authFilter.setAuthenticationSuccessHandler(new JwtSuccessHandler());
        //authFilter.setAuthenticationFailureHandler(new JwtFailureHandler()) ;

        return authFilter;
    } 

    @Bean
    @Override
    public AuthenticationManager authenticationManager() {
        List<AuthenticationProvider> providers = Collections.singletonList(authenticationProvider);
        AuthenticationManager authManager = new ProviderManager(providers);
        return authManager;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http
                .csrf().disable()
                    .authorizeRequests()
                        .antMatchers("/token", "/token/**").permitAll()
                        .antMatchers("/rest/**").authenticated() 
                .and()
                .exceptionHandling().authenticationEntryPoint(entryPoint)
                .and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        http.addFilterBefore(authenticationTokenFilter(), UsernamePasswordAuthenticationFilter.class);
        http.headers().cacheControl();
    }

//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        http.csrf().disable()
//                
//                .antMatcher("/rest/**")
//                    .authorizeRequests() 
//                        .anyRequest()
//                            .hasRole("ADMIN")
//                //.antMatchers("/rest/**").authenticated()
//                .and()
//                .antMatcher("**").authorizeRequests().anyRequest().permitAll()
//                .and()
//                .antMatcher("/login").authorizeRequests().anyRequest().permitAll()
//                .and()
//                .exceptionHandling().authenticationEntryPoint(authenticationEntryPoint)
//                .and()
//                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
//                ;
//        
//        http.addFilterBefore(authenticationTokenFilter(), UsernamePasswordAuthenticationFilter.class)
//                ;
//        http.headers().cacheControl();
//    }
//    @Bean
//    public TokenStore tokenStore() {
//        return new JwtTokenStore(accessTokenConverter());
//    }
//     
//    
//    @Bean
//    public JwtAccessTokenConverter accessTokenConverter() {
//        JwtAccessTokenConverter converter = new JwtAccessTokenConverter();
//        converter.setSigningKey("123");
//        return converter;
//    }
}
