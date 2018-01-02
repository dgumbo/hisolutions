package zw.co.hisolutions.tutorials.core.services;

import java.util.List;
import zw.co.hisolutions.tutorials.core.entities.Blog;

public interface BlogService {
    public Blog findBlog(Long id);
    public Blog findBlogByName(String blogName); 
    public Blog createBlog(Blog data)  throws Exception;    
    public List<Blog> findAllBlogs();
}
