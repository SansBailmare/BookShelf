import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './register/register.component';
import { ShelfComponent } from './shelf/shelf.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegistertrialComponent } from './registertrial/registertrial.component'

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'homepage'},
  
    {
      path : 'shelf', component : ShelfComponent,canActivate: [AuthGuard]
    },
  
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  
   {
     path: 'homepage', component:HomepageComponent,children:[
      {path: 'AboutUs', component:AboutusComponent},

    {path: 'Login', component: LoginComponent},

  {path : 'register', component : RegisterComponent},
  { path: 'Login/abc', redirectTo: 'register'},
  { path: 'register/log', redirectTo: 'Login'},
  
   ]
   },
  
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
