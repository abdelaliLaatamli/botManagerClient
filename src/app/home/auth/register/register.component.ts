import { Component, OnInit } from '@angular/core';
import { TokenPayload } from 'src/app/interfaces/token-payload';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  credentials : TokenPayload = {

    id : 0 ,
    user_name : '' ,
    name_complaite : '' ,
    email : '' ,
    password : ''

  }

  authError = false

  constructor(public auth : AuthService , public router : Router) { }

  ngOnInit() {
  }


  register(){

    this.auth.register( this.credentials )
    .subscribe(  () => this.router.navigateByUrl('/admin')  ,  err => { this.authError = err ; console.log( err ) } , () => console.log('HTTP request completed.'))


  }

}
