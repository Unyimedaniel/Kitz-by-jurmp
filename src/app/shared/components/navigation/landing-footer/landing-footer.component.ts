import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-landing-footer',
  templateUrl: './landing-footer.component.html',
  styleUrls: ['./landing-footer.component.scss']
})

export class LandingFooterComponent {

  public logo: string;
  public logoWhite: string;

  @Input() dark: boolean = false;

  constructor() {
    this.logo = './../../../../../assets/images/logo.svg';
    this.logoWhite = './../../../../../assets/images/logo-white.svg';
  }
}
