import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public languageChanged_Observable = new BehaviorSubject<string>('es');

  constructor() { }

  public notifyLanguageChange(languange: string)
  {
    this.languageChanged_Observable.next(languange);
  }

}
