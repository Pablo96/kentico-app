import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public languageChanged_Observable = new Subject<string>();

  constructor() { }

  public notifyLanguageChange(languange: string)
  {
    this.languageChanged_Observable.next(languange);
  }

}
