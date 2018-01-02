package zw.co.hisolutions.tutorials.core.services;

import java.util.List;
import java.util.NoSuchElementException;
import zw.co.hisolutions.tutorials.core.entities.Account;
import zw.co.hisolutions.tutorials.core.entities.Blog;

public interface AccountService {
    public Account findAccount(Long id) throws NoSuchElementException;
    public Account findAccountByName(String accountName);
    public Account createAccount(Account data) ;
    public Blog createBlog(Long accountid, Blog data);    
    public List<Account> getAllAccounts();

    public void deleteAccount(Account account) throws Exception;
}
