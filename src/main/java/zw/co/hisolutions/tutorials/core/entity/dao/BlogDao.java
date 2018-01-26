package zw.co.hisolutions.tutorials.core.entity.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import zw.co.hisolutions.tutorials.core.entity.Blog;

@Repository
public interface BlogDao extends CrudRepository<Blog, Long> {
    
    public Blog getByTitle(String title);
    
}
