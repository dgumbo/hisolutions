package zw.co.hisolutions.tutorials.service.impl;

import org.springframework.stereotype.Service;
import zw.co.hisolutions.tutorials.core.entity.BlogEntry;
import zw.co.hisolutions.tutorials.service.BlogEntryService;

@Service
public class BlogEntryServiceImpl implements BlogEntryService{

    @Override
    public BlogEntry find(Long id) {
     BlogEntry blogEntry = new BlogEntry();
     blogEntry.setId(id);
     blogEntry.setTitle("Test Title");
             
     return blogEntry;
     
    }
    
}
