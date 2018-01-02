package zw.co.hisolutions.tutorials.core.entities.dao;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import zw.co.hisolutions.tutorials.core.entities.Account;
import zw.co.hisolutions.tutorials.core.entities.BlogEntry;

@Repository
public interface BlogEntryDao extends CrudRepository<BlogEntry, Long> {

    public BlogEntry getByTitle(String blogTitle);
    public List<BlogEntry> getByAccount(Account account);
    
}
