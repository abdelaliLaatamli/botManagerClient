import { Component, OnInit } from '@angular/core';
import { TokenResponce } from 'src/app/interfaces/token-responce';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  user : TokenResponce

  constructor( public auth : AuthService ) { }

  ngOnInit() {
    this.getUser()
  }

  getUser(){

    console.log( this.auth.getUser() )

    // this.http.get( environment.apiUrl+"user" ,   { headers : {  Authorization : `${this.auth.getTokenGet()}` } }  )
    //           .subscribe( (user : TokenPayload) => { this.userplay = user ; console.log( user ) } , err => console.log( err )  )

  }

}
