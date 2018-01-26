package zw.co.hisolutions.core.security.service;

import javax.servlet.http.HttpServletRequest;

import zw.co.hisolutions.core.security.entity.UserLogin;

public interface SecurityService {

    String findLoggedInUsername();

    public void autologin(String username, String password);
    public void updatelogin(UserLogin user, String unitCode, Long roleID, HttpServletRequest request);

    public String getIPAddress(HttpServletRequest request);
    public String getBrowser(HttpServletRequest request);
}
