import { Component, OnInit } from '@angular/core';
import { DeliveryClient, Fields } from 'kentico-cloud-delivery';
import { Blog } from '../Models/blog.class';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.scss']
})
export class BlogViewComponent implements OnInit {

  public blog: Blog;

  constructor(private deliveryClient: DeliveryClient) {
    this.blog = new Blog();

    this.deliveryClient
    .item<Blog>("game_physics_1_a987616")
    .languageParameter('en')
    .getObservable()
    .subscribe( result => {
      this.blog = result.item;
    })
  }

  ngOnInit() {
  }

}
