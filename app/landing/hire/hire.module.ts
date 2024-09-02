import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HireRoutingModule } from './hire-routing.module';
import { HireComponent } from './hire.component';


@NgModule({
  declarations: [
    HireComponent
  ],
  imports: [
    CommonModule,
    HireRoutingModule
  ]
})
export class HireModule { }
