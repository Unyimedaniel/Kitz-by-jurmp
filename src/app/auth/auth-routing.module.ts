import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { environment } from 'src/environments/environment';


const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children:[
      { 
        path: 'login', 
        title: 'Login | ' + environment.app.name,
        component: LoginComponent 
      },

      { path: '', redirectTo: 'login', pathMatch: 'prefix' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthRoutingModule { }
