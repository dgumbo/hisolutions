//package zw.co.hisolutions.security.service.impl;
//
//import java.util.HashSet;
//import java.util.List;
//import java.util.Set;
//
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.stereotype.Service;
//import javax.servlet.http.HttpServletRequest;
//import lombok.extern.slf4j.Slf4j;
//import zw.co.hisolutions.security.entity.MenuGroup;
//import zw.co.hisolutions.security.entity.User;
//import zw.co.hisolutions.security.entity.UserLogin;
//import zw.co.hisolutions.security.service.MenuGroupService;
//import zw.co.hisolutions.security.service.SecurityService;
//import zw.co.hisolutions.security.service.UserService;
//
//@Service
//@Slf4j
//public class SecurityServiceImpl implements SecurityService {
//
//    private AuthenticationManager authenticationManager;
//    private UserDetailsService userDetailsService;
//    private UserService userService;
//    //private BCryptPasswordEncoder bCryptPasswordEncoder; 
//    private MenuGroupService menuGroupService;
//
//    @Autowired
//    public SecurityServiceImpl(AuthenticationManager authenticationManager, UserDetailsService userDetailsService, UserService userService, MenuGroupService menuGroupService/*, BCryptPasswordEncoder bCryptPasswordEncoder*/) {
//        this.authenticationManager = authenticationManager;
//        this.userDetailsService = userDetailsService;
//        this.userService = userService;
//        this.menuGroupService = menuGroupService;
//        //this.bCryptPasswordEncoder = bCryptPasswordEncoder;
//    }
//
//    private static final Logger logger = LoggerFactory.getLogger(SecurityServiceImpl.class);
//
//    @Override
//    public String findLoggedInUsername() {
//        Object userDetails = SecurityContextHolder.getContext().getAuthentication().getDetails();
//        if (userDetails instanceof UserDetails) {
//            return ((UserDetails) userDetails).getUsername();
//        }
//
//        return null;
//    }
//
//    @Override
//    public void autologin(String username, String password) {
//        UserDetails userDetails = userDetailsService.loadUserByUsername(username);
//        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(userDetails, password, userDetails.getAuthorities());
//
//        authenticationManager.authenticate(usernamePasswordAuthenticationToken);
//
//        if (usernamePasswordAuthenticationToken.isAuthenticated()) {
//            SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
//            logger.debug(String.format("Auto login %s successfully!", username));
//        }
//    }
//
//    @Override
//    public void updatelogin(UserLogin userLogin, String unitCode, Long roleID, HttpServletRequest request) {
//        User user = userService.findByUsername(userLogin.getUsername());
//        List<MenuGroup> menus = menuGroupService.getByRoleID(roleID);
//        Set<GrantedAuthority> grantedAuthorities = new HashSet<>();
//        grantedAuthorities.add(new SimpleGrantedAuthority("ROLE_ADMIN"));
//        menus.forEach((menug) -> {
//            menug.getMenus().forEach((menu) -> {
//                grantedAuthorities.add(new SimpleGrantedAuthority("ROLE" + menu.getMenuFunction().replaceAll("/", "_").toUpperCase()));
//            });
//        });
//        grantedAuthorities.forEach(action
//                -> log.info("Authority:: {}", action.getAuthority())
//        );
//
//        userLogin = new UserLogin(user.getUsername(), user.getPassword(), grantedAuthorities);
//        userLogin.setUnitCode(unitCode);
//        userLogin.setRoleID(roleID);
//        userLogin.setUserID(user.getId());
//        userLogin.setBroswer(this.getBrowser(request));
//        userLogin.setIp(this.getIPAddress(request));
//        Authentication authentication = new UsernamePasswordAuthenticationToken(userLogin, userLogin.getPassword(), userLogin.getAuthorities());
//        SecurityContextHolder.getContext().setAuthentication(authentication);
//    }
//
//    @Override
//    public String getBrowser(HttpServletRequest request) {
//        String browser = request.getHeader("User-Agent");
//        String browsername = "";
//        String browserversion = "";
//        browser = browser.toLowerCase();
//        String[] otherBrowsers = {"firefox", "chrome", "chromium", "safari", "opera"};
//        if (browser != null) {
//            if ((browser.indexOf("msie") == -1)) {
//                for (int i = 0; i < otherBrowsers.length; i++) {
//                    if (browser.indexOf(otherBrowsers[i]) > -1) {
//                        browsername = otherBrowsers[i];
//                        break;
//                    }
//                }
//                String subsString = browser.substring(browser.indexOf(browsername));
//                String Info[] = (subsString.split(" ")[0]).split("/");
//                browsername = Info[0];
//                browserversion = Info[1];
//            } else {
//                String tempStr = browser.substring(browser.indexOf("msie"), browser.length());
//                browsername = "IE";
//                browserversion = tempStr.substring(4, tempStr.indexOf(";"));
//            }
//        }
//        return browsername + " VERSION: " + browserversion;
//    }
//
//    @Override
//    public String getIPAddress(HttpServletRequest request) {
//
//        String ip = request.getHeader("X-Forwarded-For");
//        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
//            ip = request.getHeader("Proxy-Client-IP");
//        }
//        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
//            ip = request.getHeader("WL-Proxy-Client-IP");
//        }
//        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
//            ip = request.getHeader("HTTP_CLIENT_IP");
//        }
//        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
//            ip = request.getHeader("HTTP_X_FORWARDED_FOR");
//        }
//        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
//            ip = request.getRemoteAddr();
//        }
//        return ip;
//    }
//}
