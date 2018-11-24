import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  public msg: string;
  public btnLabel: string;
  constructor(private commonService: CommonService) {
    commonService.languageChanged_Observable.subscribe( value => {
      this.commonService.getJSON("./assets/local_" + value.lang + ".json").subscribe(data => {
        this.msg = data["pageNotFound"];
        this.btnLabel = data["redirMainPage"];
      });
    })
  }

  ngOnInit() {
  }

}
