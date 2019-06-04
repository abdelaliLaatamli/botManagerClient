import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from './pages/page404/page404.component';


import { AdminModule } from './AdminPanel/admin.module';
import { AuthComponent } from './home/auth/auth.component';
import { HomeComponent } from './home/home/home.component';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [

  //{ path : 'admin' , loadChildren : './AdminPanel/admin.module#AdminModule' },
  { path : 'admin' , loadChildren : () => AdminModule , canLoad : [ AuthGuard ] },
  // { path : 'admin' , component : AdminModule },
  { path : 'auth' , component : AuthComponent },
  { path : '' , component : HomeComponent},
  { path : '**' , component : Page404Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
