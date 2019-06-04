import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , of , observable  } from 'rxjs';
import { map , retry } from 'rxjs/operators';
import { Router } from '@angular/router'
import { User } from 'src/app/interfaces/user';
import { TokenPayload } from 'src/app/interfaces/token-payload';
import { environment } from 'src/environments/environment';
import { TokenResponce } from 'src/app/interfaces/token-responce';



@Injectable({
  providedIn: 'root'
})


export class AuthService {

  private token : string
  public redirectUrl: string;

  constructor( private http : HttpClient , private router : Router ) { }

  private saveToken( token : string ) : void {
      localStorage.setItem( 'userToken' , token )
      this.token = token
  }

  private getToken() : string {

    if( !this.token )
      this.token = localStorage.getItem( 'userToken' )

    return this.token ;
  }

  public getTokenGet() : string {

    if( !this.token )
      this.token = localStorage.getItem( 'userToken' )

    return this.token ;
  }


  public getUser() : User {
    const token = this.getToken()
    var payload

    if( token ){
      payload = token.split('.')[1]
      payload = window.atob(payload)
      return JSON.parse(payload)
    }
    else return null
  }

  public isloggedIn() : boolean {
    const user =  this.getUser()
    if( user )
        return user.exp > Date.now() / 1000

    return false
  }

  public register ( user : TokenPayload ) : Observable <any>{
      const base = this.http.post( environment.apiUrl+"user/register" , user)

      const  request = base.pipe(
        map( (data : TokenResponce ) => {
            if( data.token )
              this.saveToken( data.token )
            return data
        } )
      )

    return request
  }

  public login ( user : TokenPayload ) : Observable <any> {

    const base = this.http.post( environment.apiUrl+"user/login" , user )

    const request = base.pipe(
      map( (data : TokenResponce ) => {
        if ( data.token )
          this.saveToken(data.token)
        return data
      } )
    )
    return request
  }


  public profile () : Observable <any> {
      return this.http.get(environment.apiUrl+"user/profile" ,
        { headers : {  Authorization : `${this.getToken()}` }
      })
  }

  public logOut() : void {
    this.token = ""
    window.localStorage.removeItem('userToken')
    this.router.navigateByUrl('/')
  }


}
