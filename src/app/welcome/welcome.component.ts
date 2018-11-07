import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  public welcome_text: string;

  constructor() {
    this.welcome_text = "Hi there! I'm a free-time C++ developer. Here you'll see all my current projects\nart portfolio, and tutorials!"
    + "I hope you like all you see here and well lets start with my projects!.";
  }

  ngOnInit() {
  }

}
