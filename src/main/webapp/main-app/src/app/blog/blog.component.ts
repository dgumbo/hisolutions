import {Component, OnInit} from '@angular/core';
import {BlogService} from '../common/services/blogs.service';
import {AppError} from '../common/app-error';
import {NotFoundError} from '../common/not-found-error';
import {BadInputError} from '../common/bad-input-error';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {
    blogs; //: any[] ;
    private blogService: BlogService;

    constructor(blogService: BlogService) {
        this.blogService = blogService;
    }

    ngOnInit() {
        this.blogService.getAll()
            .subscribe(blogs => this.blogs = blogs);
    }

    createBlog(input: HTMLInputElement) {
        const blog: any = {title: input.value};
        this.blogs.splice(0, 0, blog);

        this.blogService.create(blog)
            .subscribe((data: any) => {
                blog.id = data.id;
            },
            (error: Response) => {
                this.blogs.splice(0, 1);

                if (error instanceof BadInputError)
                    // this.form.setErrors(error.originalError);
                    alert(error.originalError);
                else throw error;
            });
    }

    updateBlog(blog: HTMLInputElement) {
        this.blogService.update(blog)
            .subscribe(response => console.log(response));
    }

    deleteBlog(blog: HTMLInputElement) {
        const index = this.blogs.indexOf(blog);
        this.blogs.splice(index, 1);

        this.blogService.delete(blog)
            .subscribe(
            null,
            (error: AppError) => {
                this.blogs.splice(index, 0, blog);

                if (error instanceof NotFoundError)
                    alert('Blog has already been deleted.');
                else throw error;
            });
    }
}


//
