package zw.co.hisolutions.tutorials.core.services;

import java.util.List;
import org.springframework.hateoas.Resource;
import zw.co.hisolutions.tutorials.core.entity.Blog;

public interface BlogService {
    public Blog findBlog(Long id);
    public Blog findBlogByTitle(String blogName); 
    public Blog createBlog(Blog data) throws Exception;    

    public Resource<Blog> buildBlogResource(Blog blog);

    public Blog updateBlog(Blog blog);

    public List<Blog> getAllBlogs();

    public void deleteBlog(Blog findBlog);
}
