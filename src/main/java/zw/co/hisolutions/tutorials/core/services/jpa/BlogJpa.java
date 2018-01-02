package zw.co.hisolutions.tutorials.core.services.jpa;

import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import zw.co.hisolutions.tutorials.core.entities.Blog;
import zw.co.hisolutions.tutorials.core.entities.dao.BlogDao;
import zw.co.hisolutions.tutorials.core.services.BlogService;

@Repository
@Service
@Transactional
public class BlogJpa implements BlogService {

    @Autowired
    void setBlogDao(BlogDao blogDao) {
        this.blogDao = blogDao;
    }
    private BlogDao blogDao;

    @Override
    public Blog findBlog(Long id) throws NullPointerException {
        return blogDao.findById(id).get();
    }

    @Override
    public Blog createBlog(Blog data) throws NullPointerException {
        return blogDao.save(data);
    }

    @Override
    public Blog findBlogByName(String blogName) {
        return blogDao.getByName(blogName);
    }

    @Override
    public List<Blog> findAllBlogs() {
        return (List<Blog>) blogDao.findAll();
    }

}
