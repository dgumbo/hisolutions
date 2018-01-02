//package zw.co.hisolutions.tutorials.resources.asm;
//
//import org.springframework.hateoas.Link;
//import org.springframework.hateoas.mvc.ResourceAssemblerSupport;
//import zw.co.hisolutions.tutorials.core.entities.BlogEntry;
//import zw.co.hisolutions.tutorials.resources.BlogEntryResource;
//import zw.co.hisolutions.tutorials.rest.controllers.BlogEntryController;
//import static org.springframework.hateoas.mvc.ControllerLinkBuilder.*;
//
//public class BlogEntryResourceAsm extends ResourceAssemblerSupport<BlogEntry, BlogEntryResource> {
//    
//    public BlogEntryResourceAsm( ) {
//        super(BlogEntryController.class, BlogEntryResource.class);
//    }      
//
//    @Override
//    public BlogEntryResource toResource( BlogEntry blogEntry) {
//        BlogEntryResource blogEntryResource = new BlogEntryResource();
//        
//        if (blogEntry != null){
//        //blogEntryResource.setTitle(blogEntry.getTitle());
//        Link link = linkTo(methodOn(BlogEntryController.class).getBlogEntry(blogEntry.getId())).withSelfRel();
//        blogEntryResource.add(link.withSelfRel());}
//        
//        return blogEntryResource;
//    }
//}
