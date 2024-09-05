import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-blueprint',
  templateUrl: './blueprint.component.html',
  styleUrls: ['./blueprint.component.scss']
})
export class BlueprintComponent implements OnInit {

  isScrolled = false;
  isBdgScrolled = false;

  @HostListener('window:scroll', [])

  onWindowScroll() {
    const buildCon = document.querySelector('.blu_build_con');
    const bdgCon = document.querySelector('.bdg_con');

    if (buildCon) {
      const buildConRect = buildCon.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if .blu_build_con is in view
      this.isScrolled = buildConRect.top < windowHeight && buildConRect.bottom > 0;

      // Adjust the sticky content as the user scrolls past
      const scrollPercentage = 1 - buildConRect.bottom / windowHeight;
      this.isBdgScrolled = scrollPercentage > 0.8; // Adjust threshold as needed
    }
  }

  ngOnInit(): void {}

}
