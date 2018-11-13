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
  staticTextLocal: Map<string, string>;
  
  
  constructor(private deliver: DeliveryClient, public commonService: CommonService) {
    this.BlogSeries = ["All"];
    
    commonService.languageChanged_Observable
    .subscribe( result => {
      this.staticTextLocal = commonService.staticTextLocalsCurrent;
    });

    //commonService.notifyLanguageChange(commonService.languageChanged_Observable.getValue().lang);
  }

  getSeries()
  {
    
  }

  changeLanguage(language: string) {
    this.commonService.notifyLanguageChange(language);
  }
}
