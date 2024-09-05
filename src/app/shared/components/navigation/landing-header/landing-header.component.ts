import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-landing-header',
  templateUrl: './landing-header.component.html',
  styleUrls: ['./landing-header.component.scss']
})

export class LandingHeaderComponent {

  public drpStatus: boolean;
  public logo: string;
  public logoWhite: string;

  @Input() dark: boolean = false;

  constructor() {
    this.drpStatus = false;
    this.logo = './../../../../../assets/images/logo.svg';
    this.logoWhite = './../../../../../assets/images/logo-white.svg';
  }

  openMenu() {
    console.log('Open menu');
    this.drpStatus = !this.drpStatus;
  }

}
