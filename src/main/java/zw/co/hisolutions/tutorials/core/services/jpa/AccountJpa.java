package zw.co.hisolutions.tutorials.core.services.jpa;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.Resource;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import zw.co.hisolutions.tutorials.core.entities.Account;
import zw.co.hisolutions.tutorials.core.entities.Blog;
import zw.co.hisolutions.tutorials.core.entities.dao.AccountDao;
import zw.co.hisolutions.tutorials.core.services.AccountService;
import zw.co.hisolutions.tutorials.rest.controllers.AccountController;
import zw.co.hisolutions.tutorials.rest.controllers.BlogEntryController;

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
        return accountDao.getById(id);
    }

    @Override
    public Account createAccount(Account account) throws NullPointerException, Exception {
        if (account.getBlogEntries() == null) {
            account.setBlogEntries(new ArrayList<>());
        }

        account.getBlogEntries().forEach(blogEntry -> {
            blogEntry.setAccount(account);
        });

        return accountDao.save(account);
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
    public void deleteAccount(Account account) throws Exception {
        accountDao.delete(account);
    }

    @Override
    public Account updateAccount(Account account) throws Exception {
        return accountDao.save(account);
    }

    @Override
    public Resource<Account> buildAccountResource(Account account) {
        if (account == null) {
            return null;
        }

        Resource<Account> accountResource = new Resource<>(account);
        Link accountLink = linkTo(AccountController.class).slash(accountResource.getContent().getId()).withSelfRel();
        accountResource.add(accountLink);
        Link deleteAccountLink = linkTo(AccountController.class).slash(accountResource.getContent().getId()).slash("delete").withRel("delete").withType("delete");
        accountResource.add(deleteAccountLink);

        if (accountResource.getContent().getBlogEntries().size() > 0) {
            Link blogEntriesLink = linkTo(BlogEntryController.class).slash("getAll").withRel("getBlogEntries");
            accountResource.add(blogEntriesLink);
        }

        return accountResource;
    }
}
