package zw.co.hisolutions.auth.configs;

//package zw.co.hisolutions.auth.security.config;
// 
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.core.annotation.Order;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.crypto.password.PasswordEncoder; 
//
///**
// *
// * @author dgumbo
// */
//@Configuration
//@EnableWebSecurity 
//@Order(3)
//public class SecurityConfig extends WebSecurityConfigurerAdapter { 
//    
//    private final UserDetailsService userDetailsService ;
//    private final PasswordEncoder passwordEncoder;
//
//    @Autowired
//    public SecurityConfig(UserDetailsService userDetailsService, PasswordEncoder passwordEncoder) {
//        this.userDetailsService = userDetailsService;
//         this.passwordEncoder = passwordEncoder ;
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
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        http
//                .authorizeRequests()
//                .antMatchers("/login").permitAll() //"/init",
//                .antMatchers("/admin").hasAuthority("ADMIN")  
//                .anyRequest().authenticated()
//                    .and()
//            .formLogin()
//                .loginPage("/login")
//                    .and()
//            .httpBasic();
//    }
//}
