import { Component, HostListener, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-blueprint',
  templateUrl: './blueprint.component.html',
  styleUrls: ['./blueprint.component.scss']
})
export class BlueprintComponent implements OnInit {

  isScrolled = false;
  isBdgScrolled = false;

  constructor() {
    // console.log(gsap);
  }

  @HostListener('window:scroll', [])
  @ViewChild('box', { static: true }) box!: ElementRef;

  onWindowScroll() {
    const buildCon = document.querySelector('.blu_build_con');
    const bdgCon = document.querySelector('.bdg_con');

    if (buildCon) {
      const buildConRect = buildCon.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      this.animateBox();

      // Check if .blu_build_con is in view
      this.isScrolled = buildConRect.top < windowHeight && buildConRect.bottom > 0;

      // Adjust the sticky content as the user scrolls past
      const scrollPercentage = 1 - buildConRect.bottom / windowHeight;
      this.isBdgScrolled = scrollPercentage > 0.8; // Adjust threshold as needed
    }
  }

  ngOnInit(): void {
    this.animateBox();
  }

  animateBox() {
    // Basic GSAP animation
    gsap.fromTo(
      this.box.nativeElement,
      { opacity: 0, x: -100 }, // Starting state
      { opacity: 1, x: 0, duration: 1.5, ease: 'power2.out' } // Ending state
    );
  }

}
