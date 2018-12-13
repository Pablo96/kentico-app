import { Component, OnInit } from '@angular/core';
import { BlogPreview } from '../Models/blog_preview.class';
import { DeliveryClient } from 'kentico-cloud-delivery';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  public blogs: BlogPreview[];
  public pageSize = 10;


  constructor(private commonService: CommonService, private deliveryClient: DeliveryClient) {
    this.getBlogs(this.pageSize);
  }

  ngOnInit() {
    this.commonService.languageChanged_Observable.subscribe( value => {
      this.getBlogs(this.pageSize);
    })
  }

  public getBlogs(pageSize) {
    this.deliveryClient
    .items<BlogPreview>()
    .type("blogpreview")
    .languageParameter(this.commonService.languageChanged_Observable.getValue().lang)
    .depthParameter(1)
    //.limitParameter(pageSize)
    .orderByDescending("elements.date")
    .getObservable()
    .subscribe(
      result => {
        console.log(result);
        this.blogs = result.items;
        /* uncomment for testing
        if (this.blogs.length == 1)
        {
          for (let index = 0; index < 50; index++) {
            this.blogs.push(this.blogs[0]);            
          }
        }
        */
      },
      error => {
        this.commonService.handleCloudError(error);
      })
  }

  
}
