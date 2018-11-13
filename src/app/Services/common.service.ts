import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { BehaviorSubject, Observable } from 'rxjs';
import { DeliveryClient } from 'kentico-cloud-delivery';
import { BlogPreview } from '../Models/blog_preview.class';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private languagesCount = 2;
  public staticTextLocals: Map<string, string>[];
  public languageChanged_Observable = new BehaviorSubject<{lang:string, index:number}>({lang: 'es', index: 0});
  public staticTextLocalsCurrent: Map<string, string>;

  constructor(private http: HttpClient, private deliveryClient: DeliveryClient) {
    this.staticTextLocals = new Array<Map<string, string>>();

    for (let i = 0; i < this.languagesCount; i++)
    {
      this.staticTextLocals.push(new Map<string, string>());
    }
  }




  public notifyLanguageChange(languange: string)
  {
    // default index is 0 (english)
    let obj = {lang: languange, index: 0};
    if (languange === 'es')
      obj.index = 1;
  
    this.languageChanged_Observable.next(obj);
    this.getLocals(obj.lang, obj.index);
  }

  public getBlogs(pageSize: number): Observable<any>
  {
    return this.deliveryClient
    .items<BlogPreview>()
    .type("blogpreview")
    .languageParameter(this.languageChanged_Observable.getValue().lang)
    .depthParameter(1)
    .limitParameter(pageSize)
    .orderByDescending("elements.date")
    .getObservable();
  }




  private getJSON(path: string): Observable<any> {
    return this.http.get(path)
  }

  private getLocals(language: string, index: number)
  {
    // If already read the file we only assign the map
    if (this.staticTextLocals[index].size > 0)
    {
      this.staticTextLocalsCurrent = this.staticTextLocals[index]
      return;
    }
    // else we read the file and then assign the current map
    this.getJSON("./assets/local_" + language + ".json").subscribe(data => {
      console.log(data);
      Object.keys(data).forEach(key => {
        this.staticTextLocals[index].set(key, data[key]);
      });
      this.staticTextLocalsCurrent = this.staticTextLocals[index]
    });
  }
}
