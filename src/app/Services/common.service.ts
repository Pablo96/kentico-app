import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { BehaviorSubject, Observable } from 'rxjs';
import { DeliveryClient } from 'kentico-cloud-delivery';
import { CloudError } from 'kentico-cloud-core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  // optional member ?:
  private error?: string;
  private languagesCount = 2;
  public languageChanged_Observable = new BehaviorSubject<{lang:string, index:number}>({lang: 'es', index: 0});

  constructor(private http: HttpClient, private deliveryClient: DeliveryClient) {
  }


  public notifyLanguageChange(languange: string)
  {
    // default index is 0 (english)
    let obj = {lang: languange, index: 0};
    if (languange === 'es')
      obj.index = 1;
  
    this.languageChanged_Observable.next(obj);
  }

  public getJSON(path: string): Observable<any> {
    return this.http.get(path)
  }

  public handleCloudError(error: CloudError | any): void {
    if (error instanceof CloudError) {
      this.error = `Kentico Cloud Error occured with message: '${
        error.message
        }' for request with id = '${error.requestId}'`;
    } else {
      this.error = 'Unknown error occured';
    }
  }

}
