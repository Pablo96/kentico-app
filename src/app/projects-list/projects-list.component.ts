import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

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
