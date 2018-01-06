package zw.co.hisolutions.tutorials.rest.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import zw.co.hisolutions.tutorials.core.entities.Account;
import zw.co.hisolutions.tutorials.core.services.AccountService;
import zw.co.hisolutions.tutorials.services.util.DBActionResult;
import zw.co.hisolutions.tutorials.services.util.Results;

@Controller
@RequestMapping("/accounts")
public class AccountController {
    @Autowired
    void setAccountService(AccountService accountService) {
        this.accountService = accountService;
    }
    private AccountService accountService;

    @RequestMapping(value = "/getAll", produces = {MediaType.APPLICATION_JSON_VALUE, "application/hal+json"})
    public ResponseEntity<List<Resource<Account>>> allAccounts() {
        List<Resource<Account>> accountResourceList = new ArrayList();

        accountService.getAllAccounts().forEach(account -> {
            accountResourceList.add(accountService.buildAccountResource(account));
        });

        return new ResponseEntity<>(accountResourceList, HttpStatus.OK) ;
    }

    @RequestMapping(value = "/{id}", produces = {MediaType.APPLICATION_JSON_VALUE, "application/hal+json"})
    public ResponseEntity<Resource<Account>> getAccount(@PathVariable Long id) {
        Account account = accountService.findAccount(id);
        Resource<Account> accountResource = accountService.buildAccountResource(account);

        return new ResponseEntity<>(accountResource, HttpStatus.OK);
    }

    @RequestMapping(value = "/new", method = RequestMethod.PUT, produces = {MediaType.APPLICATION_JSON_VALUE, "application/hal+json"})
    public ResponseEntity<Resource<Account>> createAccount(@RequestBody Resource<Account> accountResource) throws Exception {
        Account account = accountResource.getContent();
//        System.out.println("\nAccount B4 Save : " + accountResource.getContent() + "\n");
//        try {
            account = accountService.createAccount(account);
//        } catch (Exception ex) {
//            System.out.println(ex.getMessage());
//            Logger.getLogger(AccountController.class.getName()).log(Level.SEVERE, null, ex);
//        }
        System.out.println("accountResource Starting");
        
        //System.out.println("accountResource : " + accountResource);
        //System.out.println("\nAccount After Save : " + accountResource.getContent() + "\n");
        accountResource = accountService.buildAccountResource(account);
        
        return new ResponseEntity<>(accountResource, HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}/edit", method = RequestMethod.POST, produces = {MediaType.APPLICATION_JSON_VALUE, "application/hal+json"})
    public ResponseEntity<Resource<Account>> editAccount(@PathVariable Long id, @RequestBody Resource<Account> accountResource) {
        Account account = accountResource.getContent();
        try {
            account = accountService.updateAccount(account);
        } catch (Exception ex) {
            Logger.getLogger(AccountController.class.getName()).log(Level.SEVERE, null, ex);
        }
        accountResource = accountService.buildAccountResource(account);
        
        return new ResponseEntity<>(accountResource, HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}/delete", method = RequestMethod.DELETE)
    @ResponseBody
    public Results deleteAccount(@PathVariable Long id) {
        Results results;

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
