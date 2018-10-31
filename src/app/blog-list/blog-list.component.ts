import { Component, OnInit } from '@angular/core';
import { BlogPreview } from '../models/BlogPreview';
import { DeliveryClient, SortOrder } from 'kentico-cloud-delivery';
import { CloudError } from 'kentico-cloud-core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  public blogs: BlogPreview[];
  public pageSize: number;
  // optional member ?:
  public error?: string;

  constructor(private deliveryClient: DeliveryClient) {
    this.pageSize = 10;
  }

  ngOnInit() {
    this.getBlogs();
  }

  getBlogs() {
    this.deliveryClient
    .items<BlogPreview>()
    .type("blogpreview")
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
