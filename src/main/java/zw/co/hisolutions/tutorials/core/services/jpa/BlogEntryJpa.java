package zw.co.hisolutions.tutorials.core.services.jpa;

import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository; 
import org.springframework.stereotype.Service;
import zw.co.hisolutions.tutorials.core.entities.Account;
import zw.co.hisolutions.tutorials.core.entities.BlogEntry;
import zw.co.hisolutions.tutorials.core.entities.dao.BlogEntryDao;
import zw.co.hisolutions.tutorials.core.services.BlogEntryService;

@Repository
@Service
@Transactional
public class BlogEntryJpa implements BlogEntryService {
    @Autowired
    private BlogEntryDao blogEntryDao;
    
    @Override
    public BlogEntry findBlogEntry(Long id) throws NullPointerException {
       return blogEntryDao.findById(id).get() ;
    }

    @Override
    public BlogEntry createBlogEntry(BlogEntry data) throws NullPointerException {        
        return blogEntryDao.save(data) ;  
    }

    @Override
    public BlogEntry findBlogEntryByTitle(String blogTitle) {
        return blogEntryDao.getByTitle(blogTitle); 
    }

    @Override
    public List<BlogEntry> findAllBlogEntries() {
       return (List<BlogEntry>) blogEntryDao.findAll();
    }

    @Override
    public List<BlogEntry> findAllBlogEntriesByAccount(Account account) {
        return (List<BlogEntry>) blogEntryDao. getByAccount(account);
    }

    @Override
    public BlogEntry deleteBlogEntry(BlogEntry data) throws Exception {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
}
