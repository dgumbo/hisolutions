package zw.co.hisolutions.tutorials.rest.controllers;

import org.springframework.hateoas.ExposesResourceFor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import zw.co.hisolutions.tutorials.core.entities.Blog;

@Controller
@RequestMapping("/blogs")
@ExposesResourceFor(Blog.class)
public class BlogController { 
}

