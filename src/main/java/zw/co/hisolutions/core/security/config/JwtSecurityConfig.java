package zw.co.hisolutions.core.security.config;

import java.util.Collections;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import zw.co.hisolutions.core.security.JwtAuthenticationTokenFilter;
import zw.co.hisolutions.core.security.authentication.entrypoint.JwtAuthenticationEntryPoint;
import zw.co.hisolutions.core.security.authentication.handler.JwtAuthenticationSuccessHandler;
import zw.co.hisolutions.core.security.authentication.provider.JwtAuthenticationProvider;

/**
 *
 * @author denzil
 */
@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class JwtSecurityConfig extends WebSecurityConfigurerAdapter{
        JwtAuthenticationProvider authenticationProvider;
            JwtAuthenticationEntryPoint authenticationEntryPoint;
    
    @Bean
    public AuthenticationManager authenticationManager(){ 
        return new ProviderManager(Collections.singletonList(authenticationProvider));
    }
    
    @Bean
    public JwtAuthenticationTokenFilter authenticationTokenFilter(){
        JwtAuthenticationTokenFilter filter = new JwtAuthenticationTokenFilter();
        filter.setAuthenticationManager(authenticationManager());
        filter.setAuthenticationSuccessHandler(new JwtAuthenticationSuccessHandler() );
       // filter.setAuthenticationFailurerHandler(new JwtAuthenticationFailureHandler() );
        
        return filter;
    } 

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        super.configure(http); //To change body of generated methods, choose Tools | Templates.
        
        http.csrf().disable()
                .authorizeRequests().antMatchers("**/rest/**").authenticated()
                .and()
                .exceptionHandling().authenticationEntryPoint(authenticationEntryPoint)
                .and()  
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                ;
        
        http.addFilterBefore(authenticationTokenFilter(), UsernamePasswordAuthenticationFilter.class)
                ;
        
        http.headers().cacheControl();
    }
    
    
    
}
