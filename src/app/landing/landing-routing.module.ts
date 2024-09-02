import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      { path: 'explore', loadChildren: () => import('./explore/explore.module').then(m => m.ExploreModule) },
      { path: 'pricing', loadChildren: () => import('./pricing/pricing.module').then(m => m.PricingModule) },
      { path: 'hire', loadChildren: () => import('./hire/hire.module').then(m => m.HireModule) },
      { path: 'careers', loadChildren: () => import('./careers/careers.module').then(m => m.CareersModule) },
      { path: 'book-call', loadChildren: () => import('./book/book.module').then(m => m.BookModule) },
      { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
      { path: 'blueprint', loadChildren: () => import('./blueprint/blueprint.module').then(m => m.BlueprintModule) },
      { path: '', redirectTo: 'blueprint', pathMatch: 'full' },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]
  },
  {
    path: '*', redirectTo: '/', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
