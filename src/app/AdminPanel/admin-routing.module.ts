import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelComponent } from './admin/panel/panel.component';
import { PagesComponent } from './admin/pages/pages.component';
import { UsersComponent } from './admin/users/users.component';
import { DashComponent } from './admin/dash/dash.component';
import { AuthGuard } from '../guard/auth.guard';
import { ProfileComponent } from './admin/profile/profile.component';
import { PayloadComponent } from './admin/payload/payload.component';
import { PlayerComponent } from './admin/player/player.component';
import { SendTestComponent } from './admin/send-test/send-test.component';

const adminRoutes: Routes = [

    { path : '' ,
      component : PanelComponent ,
      canActivate : [AuthGuard] ,
      children : [
        {
          path : '' ,
          canActivateChild : [ AuthGuard ] ,
          children : [
            { path : 'pages'         , component : PagesComponent     } ,
            { path : 'users'         , component : UsersComponent     } ,
            { path : 'profile'       , component : ProfileComponent   } ,
            { path : 'payloads'      , component : PayloadComponent   } ,
            { path : 'players'       , component : PlayerComponent    } ,
            { path : 'tstplayer'     , component : SendTestComponent  } ,
            { path : ''              , component : DashComponent      } ,
          ]
        }]
    }
    // { path:'' , component : PanelComponent } ,
    // { path:'pages' , component : PagesComponent } ,
    // { path:'users' , component : UsersComponent } ,
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

