import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    appname : string;

    user : User

  constructor( private auth :  AuthService ) { }

  ngOnInit() {
    this.appname = environment.appname;
    this.user = this.auth.getUser()
   // console.log(this.user)
  }


  Logout () {
      this.auth.logOut()
  }

}
