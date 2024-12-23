import { Component } from '@angular/core';

@Component({
  selector: 'app-brands-ticker',
  templateUrl: './brands-ticker.component.html',
  styleUrls: ['./brands-ticker.component.scss']
})
export class BrandsTickerComponent {
  companies = [
    { name: 'SlimeLite', logo: './../../../assets/images/brands/pack_a.svg' },
    { name: 'SlimeLite', logo: './../../../assets/images/brands/pack_c.svg' },
    { name: 'SlimeLite', logo: './../../../assets/images/brands/pack_d.svg' },
    { name: 'SlimeLite', logo: './../../../assets/images/brands/pack_e.svg' },
    { name: 'SlimeLite', logo: './../../../assets/images/brands/pack_f.svg' },
    { name: 'SlimeLite', logo: './../../../assets/images/brands/pack_g.svg' },
    
    // { name: 'SlimeLite', logo: './../../../assets/images/brand_a.svg' },
    // { name: 'Company 2', logo: './../../../assets/images/brand_b.svg' },
    // { name: 'Company 3', logo: './../../../assets/images/brand_c.png' },
    // { name: 'SlimeLite', logo: './../../../assets/images/brand_a.svg' },
    // { name: 'Company 2', logo: './../../../assets/images/brand_b.svg' },
    // { name: 'Company 3', logo: './../../../assets/images/brand_c.png' },
    // { name: 'SlimeLite', logo: './../../../assets/images/brand_a.svg' },
    // { name: 'Company 2', logo: './../../../assets/images/brand_b.svg' },
    // { name: 'Company 3', logo: './../../../assets/images/brand_c.png' },
    // Add more companies as needed
  ];
}
