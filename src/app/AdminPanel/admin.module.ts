import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


import { AdminRoutingModule } from './admin-routing.module';

import { PanelComponent } from './admin/panel/panel.component';
import { UsersComponent } from './admin/users/users.component';
import { PagesComponent } from './admin/pages/pages.component';
import { NavbarComponent } from './admin/partial/navbar/navbar.component';
import { DashComponent } from './admin/dash/dash.component';
import { SidebarComponent } from './admin/partial/sidebar/sidebar.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { PayloadComponent } from './admin/payload/payload.component';
import { CrudComponent } from './admin/pages/crud/crud.component';
import { PlayerComponent } from './admin/player/player.component';
import { SendTestComponent } from './admin/send-test/send-test.component';



@NgModule({
  declarations: [PanelComponent, UsersComponent, PagesComponent, NavbarComponent, DashComponent, SidebarComponent, ProfileComponent, PayloadComponent, CrudComponent, PlayerComponent, SendTestComponent],
  imports: [
    CommonModule,
    AdminRoutingModule ,
    FormsModule
  ]
})
export class AdminModule { }
