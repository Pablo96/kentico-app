import { Component, OnInit } from '@angular/core';
import { DeliveryClient } from 'kentico-cloud-delivery';
import { BlogPreview } from '../Models/blog_preview.class';
import { CommonService } from '../Services/common.service';
import { CloudError } from 'kentico-cloud-core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  public welcome_text: string;
  public blogsPrevs: BlogPreview[];
  public error?: string;

  constructor(private deliveryClient: DeliveryClient,
              private commonService: CommonService) {
    this.welcome_text = "Hi there! I'm a free-time C++ developer. Here you'll see all my current projects\nart portfolio, and tutorials!"
    + "I hope you like all you see here and well lets start with my projects!.";

    this.getBlogs(10);
  }

  ngOnInit() {
  }

  public getBlogs(pageSize) {
    this.deliveryClient
    .items<BlogPreview>()
    .type("blogpreview")
    .languageParameter(this.commonService.languageChanged_Observable.getValue().lang)
    .depthParameter(1)
    .limitParameter(pageSize)
    .orderByDescending("elements.date")
    .getObservable()
    .subscribe(
      result => {
        console.log(result);
        this.blogsPrevs = result.items;
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
