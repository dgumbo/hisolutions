package zw.co.hisolutions.tutorials.core.services.jpa;

import java.util.List;
import java.util.NoSuchElementException;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import zw.co.hisolutions.tutorials.core.entities.Account;
import zw.co.hisolutions.tutorials.core.entities.Blog;
import zw.co.hisolutions.tutorials.core.entities.dao.AccountDao;
import zw.co.hisolutions.tutorials.core.services.AccountService;

@Repository
@Service
@Transactional
public class AccountJpa implements AccountService {

    @Autowired
    void setAccountDao(AccountDao accountDao) {
        this.accountDao = accountDao;
    }
    private AccountDao accountDao;

    @Override
    public Account findAccount(Long id) throws NoSuchElementException {
        return accountDao.getById(id) ;
    }

    @Override
    public Account createAccount(Account data) throws NullPointerException {
        return accountDao.save(data);
    }

    @Override
    public Blog createBlog(Long accountid, Blog data) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public Account findAccountByName(String accountName) {
        return accountDao.getByName(accountName);
    }

    @Override
    public List<Account> getAllAccounts() {
        return (List<Account>) accountDao.findAll();
    }

    @Override
    public void deleteAccount(Account account) {
        accountDao.delete(account);
    }

}
