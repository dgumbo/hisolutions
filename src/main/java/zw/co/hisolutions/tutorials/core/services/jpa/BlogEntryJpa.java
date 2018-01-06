package zw.co.hisolutions.tutorials.core.services.jpa;

import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.Resource;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import zw.co.hisolutions.tutorials.core.entities.Account;
import zw.co.hisolutions.tutorials.core.entities.BlogEntry;
import zw.co.hisolutions.tutorials.core.entities.dao.BlogEntryDao;
import zw.co.hisolutions.tutorials.core.services.BlogEntryService;
import zw.co.hisolutions.tutorials.rest.controllers.BlogEntryController;

@Repository
@Service
@Transactional
public class BlogEntryJpa implements BlogEntryService {

    @Autowired
    private BlogEntryDao blogEntryDao;

    @Override
    public BlogEntry findBlogEntry(Long id) throws NullPointerException {
        return blogEntryDao.findById(id).get();
    }

    @Override
    public BlogEntry createBlogEntry(BlogEntry data) throws NullPointerException {
        return blogEntryDao.save(data);
    }

    @Override
    public BlogEntry findBlogEntryByTitle(String blogTitle) {
        return blogEntryDao.getByTitle(blogTitle);
    }

    @Override
    public List<BlogEntry> findAllBlogEntriesByAccount(Account account) {
        return (List<BlogEntry>) blogEntryDao.getByAccount(account);
    }

    @Override
    public BlogEntry deleteBlogEntry(BlogEntry data) throws Exception {
        blogEntryDao.delete(data);
        return data;
    }

    @Override
    public Resource<BlogEntry> buildBlogEntryResource(BlogEntry blogEntry) {
        Resource<BlogEntry> blogEntry_resource = new Resource<>(blogEntry);
        Link selectlink = linkTo(BlogEntryController.class).slash(blogEntry_resource.getContent().getId()).withSelfRel().withType("get");;
        Link deletelink = linkTo(BlogEntryController.class).slash(blogEntry_resource.getContent().getId()).slash("delete").withRel("delete").withType("delete");;
        blogEntry_resource.add(selectlink);
        blogEntry_resource.add(deletelink);

        return blogEntry_resource;
    }

    @Override
    public List<BlogEntry> getAllBlogEntrys() {
        return (List<BlogEntry>) blogEntryDao.findAll();
    }

    @Override
    public BlogEntry updateBlogEntry(BlogEntry blogEntry) {
        return blogEntryDao.save(blogEntry);
    }

}
