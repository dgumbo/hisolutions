package zw.co.hisolutions.tutorials.core.services;

import java.util.List;  
import zw.co.hisolutions.tutorials.core.entities.Account;
import zw.co.hisolutions.tutorials.core.entities.BlogEntry;

public interface BlogEntryService {
    public BlogEntry findBlogEntry(Long id);
    public BlogEntry findBlogEntryByTitle(String title);
    public BlogEntry createBlogEntry(BlogEntry data) throws Exception ;  
    public BlogEntry deleteBlogEntry(BlogEntry data) throws Exception ;  
    public List<BlogEntry> findAllBlogEntries();
    public List<BlogEntry> findAllBlogEntriesByAccount(Account account);
}
