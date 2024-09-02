import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareersRoutingModule } from './careers-routing.module';
import { CareersComponent } from './careers.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [
    CareersComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    CareersRoutingModule,
    SharedModule
  ]
})
export class CareersModule { }
