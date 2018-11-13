import { Component, OnInit } from '@angular/core';
import { BlogPreview } from '../Models/blog_preview.class';
import { DeliveryClient } from 'kentico-cloud-delivery';
import { CloudError } from 'kentico-cloud-core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  public blogs: BlogPreview[];
  public pageSize = 10;
  public language: string;
  // optional member ?:
  public error?: string;




  constructor(private deliveryClient: DeliveryClient, private commonService: CommonService) {
    this.language = commonService.languageChanged_Observable.getValue();
    this.getBlogs();
  }

  ngOnInit() {
    this.commonService.languageChanged_Observable.subscribe( value => {
      this.language = value;
      this.getBlogs();
    })
  }

  getBlogs() {
    this.deliveryClient
    .items<BlogPreview>()
    .type("blogpreview")
    .languageParameter(this.language)
    .depthParameter(1)
    .limitParameter(this.pageSize)
    .orderByDescending("elements.date")
    .getObservable()
    .subscribe(
      result => {
        console.log(result);
        this.blogs = result.items;
        
      },
      error => {
        this.handleCloudError(error);
      })
  }

  private handleCloudError(error: CloudError | any): void {
    if (error instanceof CloudError) {
      this.error = `Kentico Cloud Error occured with message: '${
        error.message
        }' for request with id = '${error.requestId}'`;
    } else {
      this.error = 'Unknown error occured';
    }
  }
}
