package zw.co.hisolutions.tutorials.core.entity.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import zw.co.hisolutions.tutorials.core.entity.Blog;

@Repository
public interface BlogDao extends JpaRepository<Blog, Long> {
    
    public Blog getByTitle(String title);
    
}
