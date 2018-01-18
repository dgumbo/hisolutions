package zw.co.hisolutions.tutorials.core.entities.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import zw.co.hisolutions.tutorials.core.entities.Blog;

@Repository
public interface BlogDao extends CrudRepository<Blog, Long> {
    
    public Blog getByTitle(String title);
    
}
