import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { NotFoundComponent } from './shared/not-found/not-found.component';

//
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['auth']);

const routes: Routes = [
  { path: 'app', loadChildren: () => import('./app/app.module').then(m => m.AppModule) }, //, canActivate: [AuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'login', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'm', loadChildren: () => import('./mobile/mobile.module').then(m => m.MobileModule) },

  // Legacy Routes
  { path: 'blueprint', loadChildren: () => import('./landing/blueprint/blueprint.module').then(m => m.BlueprintModule) },

  { path: '', title: 'Kitz by Jurmp - Unlimited Design Service', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule) },
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
