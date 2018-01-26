package zw.co.hisolutions.tutorials.core.services.impl;

import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.Resource;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import zw.co.hisolutions.tutorials.core.entity.Blog;
import zw.co.hisolutions.tutorials.core.entity.dao.BlogDao;
import zw.co.hisolutions.tutorials.core.services.BlogService;
import zw.co.hisolutions.tutorials.rest.controllers.BlogController;

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
    public Blog findBlogByTitle(String title) {
        return blogDao.getByTitle(title);
    }

    @Override
    public Resource<Blog> buildBlogResource(Blog blog) {
        Resource<Blog> blog_resource = new Resource<>(blog);
        Link selectlink = linkTo(BlogController.class).slash(blog_resource.getContent().getId()).withSelfRel().withType("get");;
        Link deletelink = linkTo(BlogController.class).slash(blog_resource.getContent().getId()).slash("delete").withRel("delete").withType("delete");;
        blog_resource.add(selectlink);
        blog_resource.add(deletelink);

        return blog_resource;
    }

    @Override
    public Blog updateBlog(Blog blog) {
        return blogDao.save(blog);
    }

    @Override
    public List<Blog> getAllBlogs() {
        return (List<Blog>) blogDao.findAll();
    }

    @Override
    public void deleteBlog(Blog blog) {
        blogDao.delete(blog);
    }

}
