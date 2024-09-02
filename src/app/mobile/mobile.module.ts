import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileRoutingModule } from './mobile-routing.module';
import { MobileComponent } from './mobile.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    MobileComponent
  ],
  imports: [
    CommonModule,
    MobileRoutingModule,
    IonicModule
  ]
})
export class MobileModule { }
