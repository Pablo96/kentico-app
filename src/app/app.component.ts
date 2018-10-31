import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pablo Narvaja';
  items: string[][];

  constructor() {
    this.items = [
      ["All Blogs"],
      [
        "Game Physics",
        "Game Graphics",
        "Game Input",
        "Game Resources",
        "Game Networking"
      ],
      ["Operative Systems"],
      [
        "Web",
        "Android"
      ]
    ]
  }
}
