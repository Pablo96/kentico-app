import { Component } from '@angular/core';
import { DeliveryClient } from 'kentico-cloud-delivery';
import { CommonService } from './Services/common.service';
import { CloudError } from 'kentico-cloud-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pablo Narvaja';
  blogSeries: string[];
  staticTextLocal: Map<string, string>;
  private error?: string;
  
  
  constructor(private deliver: DeliveryClient, public commonService: CommonService) {
    this.blogSeries = ["All"];
    this.getSeries();

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
    this.deliver
    .taxonomies()
    .getObservable()
    .subscribe( result => {
      for (let taxonomy of result.taxonomies)
        this.blogSeries.push(taxonomy.terms[0].name);
    },
    error => {
      this.handleCloudError(error);
    });
  }

  changeLanguage(language: string) {
    this.commonService.notifyLanguageChange(language);
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
