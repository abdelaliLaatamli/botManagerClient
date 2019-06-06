import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { TokenPayload } from 'src/app/interfaces/token-payload';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  userPasy : TokenPayload

  constructor( public auth : AuthService , public http : HttpClient ) { }

  ngOnInit() {
    this.getUser()
  }

  getUser(){

    // console.log( this.auth.getUser() )

    this.http.get( environment.apiUrl+"user" ,   { headers : {  Authorization : `${this.auth.getTokenGet()}` } }  )
              .subscribe( (user : TokenPayload) => { this.userPasy = user ; console.log( this.userPasy.role ) } , err => console.log( err )  )

  }

}
