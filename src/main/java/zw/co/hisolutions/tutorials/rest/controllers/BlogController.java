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
import zw.co.hisolutions.core.common.util.Results;
import zw.co.hisolutions.core.common.util.Results.DBActionResult;
import zw.co.hisolutions.tutorials.core.entity.Blog;
import zw.co.hisolutions.tutorials.core.services.BlogService; 

@Controller
@RequestMapping("/blogs")
@ExposesResourceFor(Blog.class)
public class BlogController { 
    @Autowired
    void setBlogService(BlogService blogService) {
        this.blogService = blogService;
    }
    private BlogService blogService;

    @RequestMapping(value = "", produces = {MediaType.APPLICATION_JSON_VALUE, "application/hal+json"})
    public ResponseEntity<List<Resource<Blog>>> getAllBlogs() {
        List<Resource<Blog>> blogResourceList = new ArrayList();

        blogService.getAllBlogs().forEach(blog -> {
            blogResourceList.add(blogService.buildBlogResource(blog));
        });

        return new ResponseEntity<>(blogResourceList, HttpStatus.OK) ;
    }

    @RequestMapping(value = "/{id}", produces = {MediaType.APPLICATION_JSON_VALUE, "application/hal+json"})
    public ResponseEntity<Resource<Blog>> getBlog(@PathVariable Long id) {
        Blog blog = blogService.findBlog(id);
        Resource<Blog> blogResource = blogService.buildBlogResource(blog);

        return new ResponseEntity<>(blogResource, HttpStatus.OK);
    }

    @RequestMapping(value = "", method = RequestMethod.POST, produces = {MediaType.APPLICATION_JSON_VALUE, "application/hal+json"})
    public ResponseEntity<Resource<Blog>> createBlog(@RequestBody Resource<Blog> blogResource) throws Exception {
        Blog blog = blogResource.getContent();
//        System.out.println("\nBlog B4 Save : " + blogResource.getContent() + "\n");
//        try {
            blog = blogService.createBlog(blog);
//        } catch (Exception ex) {
//            System.out.println(ex.getMessage());
//            Logger.getLogger(BlogController.class.getName()).log(Level.SEVERE, null, ex);
//        }
        System.out.println("blogResource Starting");
        
        //System.out.println("blogResource : " + blogResource);
        //System.out.println("\nBlog After Save : " + blogResource.getContent() + "\n");
        blogResource = blogService.buildBlogResource(blog);
        
        return new ResponseEntity<>(blogResource, HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT, produces = {MediaType.APPLICATION_JSON_VALUE, "application/hal+json"})
    public ResponseEntity<Resource<Blog>> editBlog(@PathVariable Long id, @RequestBody Resource<Blog> blogResource) {
        Blog blog = blogResource.getContent();
        try {
            blog = blogService.updateBlog(blog);
        } catch (Exception ex) {
            Logger.getLogger(BlogController.class.getName()).log(Level.SEVERE, null, ex);
        }
        blogResource = blogService.buildBlogResource(blog);
        
        return new ResponseEntity<>(blogResource, HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    @ResponseBody
    public Results deleteBlog(@PathVariable Long id) {
        Results results;

        try {
            blogService.deleteBlog(blogService.findBlog(id));
            results = new Results(DBActionResult.Success, "Successiful Deleted", id.toString(), Results.class);
        } catch (Exception ex) {
            results = new Results(DBActionResult.Failed, "Failed to Delete", id.toString(), Results.class);
            Logger.getLogger(BlogController.class.getName()).log(Level.SEVERE, null, ex);
        }

        return results;
    }
}
