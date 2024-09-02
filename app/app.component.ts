import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Kitz by Jurmp';
  currentRoute!: string;

  //
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    console.log(this.router.url);
  }

  //
  ngOnInit() {

  }

}
