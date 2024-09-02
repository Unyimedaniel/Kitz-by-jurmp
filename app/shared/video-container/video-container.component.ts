import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-video-container',
  templateUrl: './video-container.component.html',
  styleUrls: ['./video-container.component.scss']
})
export class VideoContainerComponent {
  @ViewChild('video') videoElement!: ElementRef<HTMLVideoElement>;
  isPlaying = false;

  toggleVideo() {
    const video = this.videoElement.nativeElement;
    if (video.paused) {
      video.play();
      this.isPlaying = true;
    } else {
      video.pause();
      this.isPlaying = false;
    }
  }
}
