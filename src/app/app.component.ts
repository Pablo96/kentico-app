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
  pageLang: string;

  constructor(private deliver: DeliveryClient) {
    this.pageLang = "en";
    this.BlogSeries = ["All"];
  }

  getSeries()
  {
    
  }

  changeLanguage(language: string) {
    console.log(language);
    switch (language)
    {
      case "eng": {
        this.pageLang = "en";
        location.reload();
        break;
      }
      case "spa":
      {
        this.pageLang = "es";
        location.reload();
        break;
      }
    }
  }
}
