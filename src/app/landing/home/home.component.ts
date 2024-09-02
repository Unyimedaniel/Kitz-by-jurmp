import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  public ftrBg: string;
  modalOpen: boolean = false;

  constructor() {
    this.ftrBg = "./../../../assets/images/Footer_banner.webp";
  }

  openModal() {
    this.modalOpen = true;
  }
}
