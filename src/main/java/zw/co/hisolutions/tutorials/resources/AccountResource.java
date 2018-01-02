package zw.co.hisolutions.tutorials.resources;

import java.util.Date;
import java.util.List;
import org.springframework.hateoas.ResourceSupport;
import zw.co.hisolutions.tutorials.core.entities.Blog;
import zw.co.hisolutions.tutorials.core.entities.BlogEntry;

//@Data
//@EqualsAndHashCode(callSuper=false)
public class AccountResource extends ResourceSupport {    
    private Long id;
    private String name;
    private String password; 
    private int activeStatus; 
    private Date modifiedDate;    
    private List<Blog> blogs;    
    private List<BlogEntry> blogEntries;

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getActiveStatus() {
        return activeStatus;
    }

    public void setActiveStatus(int activeStatus) {
        this.activeStatus = activeStatus;
    }

    public Date getModifiedDate() {
        return modifiedDate;
    }

    public void setModifiedDate(Date modifiedDate) {
        this.modifiedDate = modifiedDate;
    }

    public List<Blog> getBlogs() {
        return blogs;
    }

    public void setBlogs(List<Blog> blogs) {
        this.blogs = blogs;
    }

    public List<BlogEntry> getBlogEntries() {
        return blogEntries;
    }

    public void setBlogEntries(List<BlogEntry> blogEntries) {
        this.blogEntries = blogEntries;
    }
}
