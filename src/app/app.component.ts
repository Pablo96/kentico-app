import { Component } from '@angular/core';
import { DeliveryClient } from 'kentico-cloud-delivery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pablo Narvaja';
  BlogSeries: string[];

  constructor(private deliver: DeliveryClient) {
    this.BlogSeries = ["All"];
  }

  getSeries()
  {
    
  }
}
