//package zw.co.hisolutions.security.controller;
//
//import java.util.ArrayList;
//import java.util.List;
//import java.util.logging.Level;
//import java.util.logging.Logger;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.hateoas.Resource;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.MediaType;
//import org.springframework.http.ResponseEntity;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.ResponseBody;
//import zw.co.hisolutions.security.entity.User;
//import zw.co.hisolutions.security.service.UserService;
//import zw.co.hisolutions.core.common.util.Results;
//import zw.co.hisolutions.core.common.util.Results.DBActionResult; 
//
//@Controller
//@RequestMapping("/user")
//public class UserController {
//
//    @Autowired
//    private UserService userService; 
//
//    @RequestMapping(value = "", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE, "application/hal+json"})
//    public ResponseEntity<List<Resource<User>>> getAllUsers() {
////        System.out.println("/users/getall : entering");
//
//        List<Resource<User>> userResourceList = new ArrayList();
//
//        userService.findAll().forEach(user -> {
//            user.setCreatedByUser("createdByUser");
//            user.setModifiedByUser("createdByUser");
//            userResourceList.add(userService.buildUserResource(user));
//        });
//
//        return new ResponseEntity<>(userResourceList, HttpStatus.OK);
//    }
//
//    @RequestMapping(value = "/{username}", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE, "application/hal+json"})
//    public ResponseEntity<Resource<User>> getUser(@PathVariable String username) {
//        System.out.println("/user/{username} : entering");
//        User user = userService.findByUsername(username);
//        Resource<User> userResource = userService.buildUserResource(user);
//
//        return new ResponseEntity<>(userResource, HttpStatus.OK);
//    }
//
//    @RequestMapping(value = "", method = RequestMethod.POST, produces = {MediaType.APPLICATION_JSON_VALUE, "application/hal+json"})
//    public ResponseEntity<Resource<User>> createUser(@RequestBody Resource<User> userResource) throws Exception {
//
//        System.out.println("\nUser B4 Create : " + userResource.getContent() + "\n");
//        User user = userResource.getContent();
////        try {
//        user = userService.save(user);
////        } catch (Exception ex) {
////            System.out.println(ex.getMessage());
////            Logger.getLogger(UserController.class.getName()).log(Level.SEVERE, null, ex);
////        } 
//
//        userResource = userService.buildUserResource(user);
//
//        return new ResponseEntity<>(userResource, HttpStatus.OK);
//    }
//
//    @RequestMapping(value = "/{id}", method = RequestMethod.PUT, produces = {MediaType.APPLICATION_JSON_VALUE, "application/hal+json"})
//    public ResponseEntity<Resource<User>> editUser(@PathVariable Long id, @RequestBody Resource<User> userResource) {
//        System.out.println("\nUser B4 Edit : " + userResource.getContent() + "\n");
//        User user = userResource.getContent();
//        try {
//            user = userService.updateUser(user);
//        } catch (Exception ex) {
//            Logger.getLogger(UserController.class.getName()).log(Level.SEVERE, null, ex);
//        }
//        userResource = userService.buildUserResource(user);
//
//        return new ResponseEntity<>(userResource, HttpStatus.OK);
//    }
//
//    @RequestMapping(value = "/{username}", method = RequestMethod.DELETE)
//    @ResponseBody
//    public Results deleteUser(@PathVariable String username) {
//        Results results;
//
//        try {
//            userService.deleteUser(username);
//            results = new Results(DBActionResult.Success, "Successiful Deleted", username, Results.class);
//        } catch (Exception ex) {
//            results = new Results(DBActionResult.Failed, "Failed to Delete", username, Results.class);
//            Logger.getLogger(UserController.class.getName()).log(Level.SEVERE, null, ex);
//        }
//
//        return results;
//    }
//}
