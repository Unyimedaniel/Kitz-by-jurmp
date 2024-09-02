import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlueprintRoutingModule } from './blueprint-routing.module';
import { BlueprintComponent } from './blueprint.component';


@NgModule({
  declarations: [
    BlueprintComponent
  ],
  imports: [
    CommonModule,
    BlueprintRoutingModule
  ]
})
export class BlueprintModule { }
