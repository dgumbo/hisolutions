package zw.co.hisolutions.tutorials.rest.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.ExposesResourceFor;
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
import zw.co.hisolutions.tutorials.core.entities.BlogEntry;
import zw.co.hisolutions.tutorials.core.services.BlogEntryService;
import zw.co.hisolutions.tutorials.services.util.DBActionResult;
import zw.co.hisolutions.tutorials.services.util.Results;

@Controller
@RequestMapping("/blogEntries")
@ExposesResourceFor(BlogEntry.class)
public class BlogEntryController {

    @Autowired
    void setBlogEntryService(BlogEntryService blogEntryService) {
        this.blogEntryService = blogEntryService;
    }
    private BlogEntryService blogEntryService;

    @RequestMapping(value = "/getAll", produces = {MediaType.APPLICATION_JSON_VALUE, "application/hal+json"})
    public ResponseEntity<List<Resource<BlogEntry>>> allBlogEntrys() {
        List<Resource<BlogEntry>> blogEntryResourceList = new ArrayList();

        blogEntryService.getAllBlogEntrys().forEach(blogEntry -> {
            blogEntryResourceList.add(blogEntryService.buildBlogEntryResource(blogEntry));
        });

        return new ResponseEntity<>(blogEntryResourceList, HttpStatus.OK) ;
    }

    @RequestMapping(value = "/{id}", produces = {MediaType.APPLICATION_JSON_VALUE, "application/hal+json"})
    public ResponseEntity<Resource<BlogEntry>> getBlogEntry(@PathVariable Long id) {
        BlogEntry blogEntry = blogEntryService.findBlogEntry(id);
        Resource<BlogEntry> blogEntryResource = blogEntryService.buildBlogEntryResource(blogEntry);

        return new ResponseEntity<>(blogEntryResource, HttpStatus.OK);
    }

    @RequestMapping(value = "/new", method = RequestMethod.PUT, produces = {MediaType.APPLICATION_JSON_VALUE, "application/hal+json"})
    public ResponseEntity<Resource<BlogEntry>> createBlogEntry(@RequestBody Resource<BlogEntry> blogEntryResource) throws Exception {
        BlogEntry blogEntry = blogEntryResource.getContent();
//        System.out.println("\nBlogEntry B4 Save : " + blogEntryResource.getContent() + "\n");
//        try {
            blogEntry = blogEntryService.createBlogEntry(blogEntry);
//        } catch (Exception ex) {
//            System.out.println(ex.getMessage());
//            Logger.getLogger(BlogEntryController.class.getName()).log(Level.SEVERE, null, ex);
//        }
        System.out.println("blogEntryResource Starting");
        
        //System.out.println("blogEntryResource : " + blogEntryResource);
        //System.out.println("\nBlogEntry After Save : " + blogEntryResource.getContent() + "\n");
        blogEntryResource = blogEntryService.buildBlogEntryResource(blogEntry);
        
        return new ResponseEntity<>(blogEntryResource, HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}/edit", method = RequestMethod.POST, produces = {MediaType.APPLICATION_JSON_VALUE, "application/hal+json"})
    public ResponseEntity<Resource<BlogEntry>> editBlogEntry(@PathVariable Long id, @RequestBody Resource<BlogEntry> blogEntryResource) {
        BlogEntry blogEntry = blogEntryResource.getContent();
        try {
            blogEntry = blogEntryService.updateBlogEntry(blogEntry);
        } catch (Exception ex) {
            Logger.getLogger(BlogEntryController.class.getName()).log(Level.SEVERE, null, ex);
        }
        blogEntryResource = blogEntryService.buildBlogEntryResource(blogEntry);
        
        return new ResponseEntity<>(blogEntryResource, HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}/delete", method = RequestMethod.DELETE)
    @ResponseBody
    public Results deleteBlogEntry(@PathVariable Long id) {
        Results results;

        try {
            blogEntryService.deleteBlogEntry(blogEntryService.findBlogEntry(id));
            results = new Results(DBActionResult.Success, "Successiful Deleted", id.toString(), Results.class);
        } catch (Exception ex) {
            results = new Results(DBActionResult.Failed, "Failed to Delete", id.toString(), Results.class);
            Logger.getLogger(BlogEntryController.class.getName()).log(Level.SEVERE, null, ex);
        }

        return results;
    }
}
