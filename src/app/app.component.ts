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
    this.staticTextLocal = new Map<string, string>();
    
    commonService.languageChanged_Observable.subscribe( obj => {
      this.commonService.getJSON("./assets/local_" + obj.lang + ".json").subscribe(data => {
        console.log(data);
        Object.keys(data).forEach(key => {
          this.staticTextLocal.set(key, data[key]);
        });
      });
    })
  }

  getSeries()
  {
  }

  changeLanguage(language: string) {
    this.commonService.notifyLanguageChange(language);
  }
}
