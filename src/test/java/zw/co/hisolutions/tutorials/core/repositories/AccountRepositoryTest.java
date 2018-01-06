package zw.co.hisolutions.tutorials.core.repositories;

import static org.junit.Assert.assertNotNull;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.ConfigFileApplicationContextInitializer;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.support.AnnotationConfigContextLoader;
import org.springframework.transaction.annotation.Transactional;
import zw.co.hisolutions.spring.configs_test.TestsPreConfiguration_HISolutions;
import zw.co.hisolutions.tutorials.core.entities.Account;
import zw.co.hisolutions.tutorials.core.services.AccountService;

@SpringBootTest
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = {TestsPreConfiguration_HISolutions.class}
        , loader = AnnotationConfigContextLoader.class
        , initializers = { ConfigFileApplicationContextInitializer.class }) 
public class AccountRepositoryTest {
    
    @Autowired
    private AccountService accountRepository;
    
    private Account account;
    
    public AccountRepositoryTest() {
    }
    
    @Before
    @Transactional
    @Rollback(false)
    public void setUp() throws Exception {
        account = new Account();
        account.setName("name");
        account.setPassword("password");
        account = accountRepository.createAccount(account);
    }    

    @Test
    @Transactional
    public void testFind(){
        assertNotNull(accountRepository.findAccount(account.getId()));
    }
}