// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import {Routes , RouterModule, ROUTES} from '@angular/router'
//   import { from } from 'rxjs';
// import { RegisterComponent } from './register/register.component';
// import { LoginComponent } from './login/login.component';


// const routs:Routes = [

//   {path:'register', component:RegisterComponent},
//   {path:'login', component:LoginComponent}
// ]


// @NgModule({
//   declarations: [],
//   imports: [RouterModule.forRoot(ROUTES)], 
//   export: [RouterModule]
// })
// export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', canActivate: [AuthGuard], component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }