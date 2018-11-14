import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { DeliveryClient, Fields } from 'kentico-cloud-delivery';
import { Blog } from '../Models/blog.class';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.scss']
})
export class BlogViewComponent implements OnInit {

  public blog: Blog;
  public parameter: string;

  constructor(
    private deliveryClient: DeliveryClient,
    private route: ActivatedRoute
    ) {

    this.initBlog();
    
    this.route.params.subscribe( 
      slug => {
        this.getBlog(slug.slug);
      }
    );
  }

  ngOnInit() {
  }

  private initBlog() {
    this.blog = new Blog();
    this.blog.title = new Fields.TextField('title', "Not a blog");
    this.blog.content = new Fields.RichTextField('content', "<p> Not a blog. </p>", [], null);
    this.blog.date = new Fields.DateTimeField('date', "20/12/2018T00:00:00Z");
  }

  private getBlog(slug: string) {
    this.deliveryClient.items<Blog>()
    .type('blog')
    .equalsFilter('slug.value', slug)
    .languageParameter('en')
    .getObservable()
    .subscribe( result => {
      if (result.firstItem === null)
        console.log("Null query result!");
      else{
        this.blog = result.firstItem;
        this.parameter = result.firstItem.title.text;
      }
    })
  }
}
