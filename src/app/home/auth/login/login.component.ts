import { Component, OnInit } from '@angular/core';
import { TokenPayload } from 'src/app/interfaces/token-payload';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials : TokenPayload = {

    id : 0 ,
    user_name : '' ,
    name_complaite : '' ,
    email : '' ,
    password : ''

  }

  authError : any = false


  constructor( public auth : AuthService , public router : Router  ) { }

  ngOnInit() {
  }

  login() : void {

    this.auth.login( this.credentials )
        .subscribe( () => this.router.navigateByUrl('/admin')  ,
                    err => {
                        this.authError =  err ;
                        if( typeof  err.error  != "string" )
                          this.authError.error = err.message

                      }  ,
                    () => console.log('HTTP request completed.'))

  }


}
