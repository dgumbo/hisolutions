//package zw.co.hisolutions.auth.configs;
//
//import java.util.Collections;
//import java.util.List;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.core.annotation.Order;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.AuthenticationProvider;
//import org.springframework.security.authentication.ProviderManager;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;   
//
///**
// *
// * @author dgumbo
// */
//@Configuration
//@EnableWebSecurity
//@Order(2)
//////@EnableGlobalMethodSecurity(prePostEnabled = true)
//public class JwtSecurityConfig extends WebSecurityConfigurerAdapter {
//
//    private final JwtAuthenticationProvider authenticationProvider;
//    private final JwtAuthenticationEntryPoint entryPoint;
//    private final UserDetailsService userDetailsService;
//    private final PasswordEncoder passwordEncoder;
//
//    @Autowired
//    public JwtSecurityConfig(JwtAuthenticationProvider authenticationProvider, JwtAuthenticationEntryPoint entryPoint, UserDetailsService userDetailsService, PasswordEncoder passwordEncoder) {
//        this.userDetailsService = userDetailsService;
//        this.passwordEncoder = passwordEncoder;
//        this.authenticationProvider = authenticationProvider;
//        this.entryPoint = entryPoint;
//    }
//    
//    @Autowired
//    public void configureGlobal(AuthenticationManagerBuilder authBuilder) throws Exception {
//        authBuilder
//                .userDetailsService(userDetailsService) 
//                .passwordEncoder(passwordEncoder)
//                ; 
//    }
//
//    @Bean
//    public JwtAuthenticationFilter authenticationTokenFilter() throws Exception {
//        JwtAuthenticationFilter authFilter = new JwtAuthenticationFilter( );
//        authFilter.setAuthenticationManager(authenticationManager());
//        authFilter.setAuthenticationSuccessHandler(new JwtSuccessHandler());
//        //authFilter.setAuthenticationFailureHandler(new JwtFailureHandler()) ;
//
//        return authFilter;
//    } 
//
//  
////    @Bean
////    @Override
////    public AuthenticationManager authenticationManager() {
////        return new ProviderManager(Collections.singletonList(authenticationProvider));
////    } 
//
//    @Bean
//    public PasswordEncoder passwordEncoderBean() {
//        return new BCryptPasswordEncoder();
//    }
//
//    @Bean
//    @Override
//    public AuthenticationManager authenticationManager() throws Exception {
//        return super.authenticationManagerBean();
//    }
//
//
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//
//        http
//                .csrf().disable()
//                    .authorizeRequests() 
//                        .antMatchers("/jwtauth", "/jwtauth/**","/token", "/token/**", "/login", "/logout", "index.html", "/index.html").permitAll()
//                        .antMatchers("/rest/**").authenticated() 
//                .and()
//                //.authenticationProvider(authenticationProvider)
//                .exceptionHandling().authenticationEntryPoint(entryPoint)
//                .and()
//                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
//
//        http.addFilterBefore(authenticationTokenFilter(), UsernamePasswordAuthenticationFilter.class);
//        http.headers().cacheControl();
//    }
//}
