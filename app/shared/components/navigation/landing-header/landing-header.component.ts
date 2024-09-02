import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-header',
  templateUrl: './landing-header.component.html',
  styleUrls: ['./landing-header.component.scss']
})

export class LandingHeaderComponent {

  public drpStatus: boolean;

  constructor() {
    this.drpStatus = false;
  }

  openMenu() {
    console.log('Open menu');
    this.drpStatus = !this.drpStatus;
  }

}
