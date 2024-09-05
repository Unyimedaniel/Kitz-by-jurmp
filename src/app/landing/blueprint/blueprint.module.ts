import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlueprintRoutingModule } from './blueprint-routing.module';
import { BlueprintComponent } from './blueprint.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BlueprintComponent
  ],
  imports: [
    CommonModule,
    BlueprintRoutingModule,
    SharedModule
  ]
})
export class BlueprintModule { }
