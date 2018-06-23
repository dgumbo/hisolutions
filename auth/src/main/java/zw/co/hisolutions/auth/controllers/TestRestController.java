/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package zw.co.hisolutions.auth.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import zw.co.hisolutions.auth.entity.User;
import zw.co.hisolutions.auth.service.UsersService;

/**
 *
 * @author dgumbo
 */
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/rest")
public class TestRestController {
    
    private final UsersService userService ;
    
    @Autowired
    public TestRestController(UsersService userService) {
        this.userService = userService;
    } 
    
    @GetMapping("/users")
    public List<User> users(){
        System.out.println("zw.co.hisolutions.auth.controllers.RestTestController.users()");
        
        return userService.findAll() ;
    }
    
    @GetMapping("/userid/{id}")
    public User user(@PathVariable Long id){
        System.out.println("zw.co.hisolutions.auth.controllers.RestTestController.users()");
        
        return userService.find(id);
    }
    
    @GetMapping("/username/{username}")
    public User usern(@PathVariable String username){
        System.out.println("zw.co.hisolutions.auth.controllers.RestTestController.users()");
        
        return userService.findUserByUsername(username);
    }
}
