package zw.co.hisolutions.tutorials.rest.controllers;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import zw.co.hisolutions.tutorials.core.entities.BlogEntry;
import zw.co.hisolutions.tutorials.core.services.BlogEntryService;

@Controller
public class BlogEntryController {

    @Autowired
    BlogEntryService blogEntryService;

//    @RequestMapping(value = "/rest/blog-entry/{blogEntryId}", method = RequestMethod.GET)
//    @ResponseBody
//    public ResponseEntity<BlogEntryResource> getBlogEntry(@PathVariable Long blogEntryId) {
//
//        BlogEntry blogEntry = blogEntryService.findBlogEntry(blogEntryId);
//        //System.out.println("Pano pa: /rest/blog-entry/" + blogEntryId +", blogEntry.getTitle() : " + blogEntry.getTitle() + ". tasvika !");
//
//        if (blogEntry != null) {
//            BlogEntryResource res = new BlogEntryResourceAsm().toResource(blogEntry);
//            return new ResponseEntity<BlogEntryResource>(res, HttpStatus.OK);
//        } else {
//            return new ResponseEntity<BlogEntryResource>(HttpStatus.NOT_FOUND);
//        }
//    }

    @RequestMapping("/testMnV")
    public ModelAndView indexMapping(ModelAndView mv) {
        mv.setViewName("index");
        return mv;
    }

    @RequestMapping("/testString")
    public String indexMapping() {
        System.out.println("Pano pa String tasvika!!");
        return "index";
    }

//    @RequestMapping("/testResponseEntity")
//    public ResponseEntity<Object> test() {
//        System.out.println("Pano pa ResponseEntity tasvika!!");
//
//        BlogEntry blogEntry = new BlogEntry();
//        blogEntry.setId(2018L);
//        blogEntry.setTitle("Happy New Year");
//        return new ResponseEntity<Object>(blogEntry, HttpStatus.OK);
//    }

    @RequestMapping("/testBlogEntry")
    @ResponseBody
    public BlogEntry testResponseBody() {
        System.out.println("Pano pa BlogEntry ResponseBody tasvika!!");

        BlogEntry blogEntry = new BlogEntry();
        blogEntry.setId(2018L);
        blogEntry.setTitle("Happy New Year");
        return blogEntry;
    }

    @RequestMapping("/testBlogEntryList")
    @ResponseBody
    public List<BlogEntry> testBlogEntryList(@RequestBody BlogEntry entry) {
        System.out.println("Pano pa BlogEntry ResponseBody tasvika!!");

        List<BlogEntry> blogEntryList = new ArrayList();

        BlogEntry blogEntry = new BlogEntry();
        blogEntry.setId(2016L);
        blogEntry.setTitle("Last Year But One");

        BlogEntry blogEntry2 = new BlogEntry();
        blogEntry2.setId(2017L);
        blogEntry2.setTitle("Last Year");

        BlogEntry blogEntry3 = new BlogEntry();
        blogEntry3.setId(2018L);
        blogEntry3.setTitle("Happy New Year");

        blogEntryList.add(blogEntry);
        blogEntryList.add(blogEntry2);
        blogEntryList.add(blogEntry3);

        return blogEntryList;
    }

    @RequestMapping(value = "/test", method = RequestMethod.GET)
    @ResponseBody
    public BlogEntry testResponse(@RequestBody BlogEntry entry) {
        System.out.println("Pano pa BlogEntry ResponseBody tasvika!!");

        return entry;
    }

}
