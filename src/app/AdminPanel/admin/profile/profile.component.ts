import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TokenPayload } from 'src/app/interfaces/token-payload';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user : User

  userplay : TokenPayload = {   id : null ,
        user_name :"" ,
        name_complaite : "" ,
        email : "" ,
        password : ""
      }

  constructor( public auth : AuthService , public http : HttpClient ) { }

  ngOnInit() {
    // console.log( this.auth.getUser() )

    this.getUsers()
  }

  getUsers(){

    // this.auth.
    this.http.get( environment.apiUrl+"user" ,   { headers : {  Authorization : `${this.auth.getTokenGet()}` } }  )
              .subscribe( (user : TokenPayload) => { this.userplay = user ; console.log( user ) } , err => console.log( err )  )
  }

  saveUser(){
    // console.log( this.userplay  )

    this.http.put( environment.apiUrl+`user` , this.userplay )
            .subscribe( data => console.log( data ) )

  }






}
