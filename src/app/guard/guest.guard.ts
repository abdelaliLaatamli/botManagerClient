import { Injectable } from '@angular/core';
import { CanActivate , ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree , Router , Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})

export class GuestGuard implements CanActivate {


  constructor( public router : Router , public auth : AuthService )
  {}

  canActivate() {
    if( !this.auth.isloggedIn() )
      this.router.navigateByUrl('/auth')
      // this.router.navigateByUrl('/admin')
    return false
  }



}
