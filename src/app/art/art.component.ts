import { Component, OnInit } from '@angular/core';
import { DeliveryClient } from 'kentico-cloud-delivery';
import { ArtPreview } from '../Models/art_preview.class';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.scss']
})
export class ArtComponent implements OnInit {

  public artPrevs: ArtPreview[];
  public pageSize = 10;
  public msg:string;

  constructor(private deliveryClient: DeliveryClient,
     private commonService: CommonService) {
    //this.getArtPrevs();
    commonService.languageChanged_Observable.subscribe( value => {
      this.commonService.getJSON("./assets/local_" + value.lang + ".json").subscribe(data => {
        this.msg = data["wip"];
      });
    })
  }

  ngOnInit() {
    
  }

  private getArtPrevs() {
    this.deliveryClient
    .items<ArtPreview>()
    .type("imagepreview")
    .depthParameter(5)
    .limitParameter(this.pageSize)
    .orderByDescending("elements.date")
    .getObservable()
    .subscribe(
      result => {
        console.log(result);
        /*
        this.artPrevs = result.items;
        if (this.artPrevs.length == 1) {
          for (let index = 0; index < 50; index++) {
            this.artPrevs.push(this.artPrevs[0])
          }
        }
        */
      },
      error => {
        this.commonService.handleCloudError(error);
      })
  }
}
