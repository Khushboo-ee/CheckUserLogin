import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserGuard } from './user.guard';

const routes: Routes = [
  {path:'welcome',component:WelcomeComponent, canActivate:[UserGuard]},
  {path:'login',component:LoginComponent},
  {path:'user',component:UserinfoComponent,canActivate:[UserGuard]}, // userguard has to check that welcome and userinfo should not be opened without loggingin
  {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
