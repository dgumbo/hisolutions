package zw.co.hisolutions.tutorials.rest.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.ExposesResourceFor;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.Resource;
import org.springframework.hateoas.hal.Jackson2HalModule;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import zw.co.hisolutions.tutorials.core.entities.Account;
import zw.co.hisolutions.tutorials.core.services.AccountService;
import zw.co.hisolutions.tutorials.resources.AccountResource;
import zw.co.hisolutions.tutorials.services.util.DBActionResult;
import zw.co.hisolutions.tutorials.services.util.Results;

@Controller
@RequestMapping("/accounts")
@ExposesResourceFor(Account.class)
public class AccountController {

    @Autowired
    void setAccountService(AccountService accountService) {
        this.accountService = accountService;
    }
    private AccountService accountService;      
    
    //@Autowired EntityLinks entityLinks;
    
    ObjectMapper objectMapper = new ObjectMapper();
    
    public AccountController(){
        objectMapper.registerModule(new Jackson2HalModule());
    }
    
    @RequestMapping("/getAll")
    //@ResponseBody
    //public List<Account> allAccounts(){ 
    public List<AccountResource> allAccounts(){ 

        List<Account> allAccountsList = accountService.getAllAccounts(); 
        List<AccountResource> accountResourceList = new ArrayList();
        
        allAccountsList.forEach( account -> {
            AccountResource accountResource = objectMapper.convertValue(account, AccountResource.class);
            Link accountLink = linkTo(AccountController.class).slash(account.getId()).withSelfRel();
            accountResource.add(accountLink);
            
            if(account.getBlogEntries().size() > 0 ) {
                Link blogEntriesLink = linkTo(BlogEntryController.class).withRel("allBlogEntries");
                accountResource.add(blogEntriesLink);
            }
            
            if(account.getBlogs().size() > 0 ) {
                Link blogsLink = linkTo(BlogController.class).withRel("allBlogs");
                accountResource.add(blogsLink);
            }    
            accountResourceList.add(accountResource);
        });
        

        //return allAccountsList;
        return accountResourceList;
    }   
    
    @RequestMapping(value="/{id}", method=RequestMethod.GET)
    @ResponseBody
    public AccountResource getAccountResource(@PathVariable Long id){
        Account account = accountService.findAccount(id);
        
            AccountResource accountResource = objectMapper.convertValue(account, AccountResource.class);
            Link accountLink = linkTo(AccountController.class).slash(account.getId()).withSelfRel();
            accountResource.add(accountLink);
            
        return accountResource;
    } 
    
    @RequestMapping(value="/get/{id}")
    //@ResponseBody
    //public Account getAccount(@PathVariable Long id){ 
    public HttpEntity<Resource<Account>> getAccount(@PathVariable Long id){        
        Account account = accountService.findAccount(id);
        Resource<Account> resource_account = new Resource<>(account);
        
        Link accountLink = linkTo(AccountController.class).slash(account.getId()).withSelfRel();
        resource_account.add(accountLink);
            
        ResponseEntity<Resource<Account>> response_entity = new ResponseEntity<>(resource_account, HttpStatus.OK);
        return response_entity;
        //return account;
    }
    
    @RequestMapping(value="/new", method=RequestMethod.POST)
    @ResponseBody
    public Account createAccount(@PathVariable Account account){
        return accountService.createAccount(account);
    }
    
    @RequestMapping(value="/delete/{id}", method=RequestMethod.DELETE)
    @ResponseBody
    public Results deleteAccount(@PathVariable Long id){
        Results results ;
        
        try {
            accountService.deleteAccount(accountService.findAccount(id));
            results = new Results(DBActionResult.Success, "Successiful Deleted", id.toString(), Results.class);
        } catch (Exception ex) {
            results = new Results(DBActionResult.Failed, "Failed to Delete", id.toString(), Results.class);
            Logger.getLogger(AccountController.class.getName()).log(Level.SEVERE, null, ex);
        }
        
        return results;
    }
}
