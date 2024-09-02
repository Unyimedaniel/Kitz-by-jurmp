import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingHeaderComponent } from './components/navigation/landing-header/landing-header.component';
import { LandingFooterComponent } from './components/navigation/landing-footer/landing-footer.component';
import { HeaderComponent } from './components/admin/nav/header/header.component';
import { VideoModalComponent } from './video-modal/video-modal.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { VideoContainerComponent } from './video-container/video-container.component';
import { BrandsTickerComponent } from './brands-ticker/brands-ticker.component';



@NgModule({
  declarations: [
    LandingHeaderComponent,
    LandingFooterComponent,
    HeaderComponent,
    VideoModalComponent,
    NotFoundComponent,
    VideoContainerComponent,
    BrandsTickerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LandingHeaderComponent,
    LandingFooterComponent,
    HeaderComponent,
    VideoModalComponent,
    VideoContainerComponent,
    BrandsTickerComponent
  ]
})
export class SharedModule { }
