import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';
import { DeliveryClient } from 'kentico-cloud-delivery';
import { ProjectPreview } from '../Models/project-preview.class';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

  public previews: ProjectPreview[];

  constructor(private delivery: DeliveryClient, private commonService: CommonService) {
    this.getProjectsPrevs();
  }

  ngOnInit() {
  }

  private getProjectsPrevs() {
    this.delivery
    .items<ProjectPreview>()
    .type("projectpreview")
    .languageParameter(this.commonService.languageChanged_Observable.getValue().lang)
    .orderByDescending("elements.date")
    .getObservable()
    .subscribe( result =>
      {
        this.previews = result.items;
        console.log(this.previews[0].image.assets.pop().url)
      },
      error => {
        this.commonService.handleCloudError(error);
      }
    )
  }
}
