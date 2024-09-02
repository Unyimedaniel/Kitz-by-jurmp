import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})

export class IndexComponent {

  //
  showVideo = false;

  constructor() {

  }

  toggleVideo() {
    this.showVideo = !this.showVideo;
  }

}
