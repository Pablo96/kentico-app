import { Component } from '@angular/core';
import { DeliveryClient } from 'kentico-cloud-delivery';
import { CommonService } from './Services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pablo Narvaja';
  BlogSeries: string[];

  constructor(private deliver: DeliveryClient, private commonService: CommonService) {
    this.BlogSeries = ["All"];
  }

  getSeries()
  {
    
  }

  changeLanguage(language: string) {
    console.log(language);
    this.commonService.notifyLanguageChange(language);
  }
}
