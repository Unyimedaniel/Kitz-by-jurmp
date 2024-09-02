import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NbSidebarModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    RouterModule,
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule,
  ]
})
export class AdminModule { }
