import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-wip',
  templateUrl: './wip.component.html',
  styleUrls: ['./wip.component.scss']
})
export class WipComponent implements OnInit {

  public msg:string;
  
  constructor(private commonService: CommonService) {
    commonService.languageChanged_Observable.subscribe( value => {
      this.commonService.getJSON("./assets/local_" + value.lang + ".json").subscribe(data => {
        this.msg = data["wip"];
      });
    })
  }
  ngOnInit() {
  }

}
