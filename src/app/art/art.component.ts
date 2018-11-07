import { Component, OnInit } from '@angular/core';
import { DeliveryClient } from 'kentico-cloud-delivery';
import { ArtPreview } from '../Models/art_preview.class';
import { CloudError } from 'kentico-cloud-core';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.scss']
})
export class ArtComponent implements OnInit {

  public artPrevs: ArtPreview[];
  public pageSize = 10;

  // optional member ?:
  public error?: string;

  constructor(private deliveryClient: DeliveryClient) {
    this.getArtPrevs();
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
        this.artPrevs = result.items;
      },
      error => {
        this.handleCloudError(error);
      })
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
