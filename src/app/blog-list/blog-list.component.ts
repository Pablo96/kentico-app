import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../services/blogs.service';
import { BlogPreview } from '../models/BlogPreview';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  public blog: BlogPreview;

  constructor(private service: BlogsService) {
    this.blog = new BlogPreview();

    service.getItem().subscribe(result => {
     this.blog.title = result['item'].elements.title.value;
     this.blog.description = result['item'].elements.description.value;
     this.blog.date = result['item'].elements.date.value;
    })
  }

  ngOnInit() {
  }

}
