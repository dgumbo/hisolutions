package zw.co.hisolutions.tutorials.core.services;

import java.util.List;
import java.util.NoSuchElementException;
import org.springframework.hateoas.Resource;
import zw.co.hisolutions.tutorials.core.entities.Account;
import zw.co.hisolutions.tutorials.core.entities.Blog;

public interface AccountService {
    public Account findAccount(Long id) throws NoSuchElementException;
    public Account findAccountByName(String accountName);
    
    public Account createAccount(Account data) throws Exception;
    public Account updateAccount(Account account) throws Exception;
    public void deleteAccount(Account account) throws Exception;
    
    public Blog createBlog(Long accountid, Blog data);    
    public List<Account> getAllAccounts();


    public Resource<Account> buildAccountResource(Account account);
}
