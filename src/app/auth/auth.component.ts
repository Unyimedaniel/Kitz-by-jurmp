import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent {

  public logo: string;

  constructor() {
    this.logo = "./../../assets/images/logo-white.svg";
  }

}
