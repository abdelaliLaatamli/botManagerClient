import { Injectable } from '@angular/core';
import {  CanActivate, Router ,
          ActivatedRouteSnapshot,
          RouterStateSnapshot,
          CanActivateChild,
          NavigationExtras,
          CanLoad, Route, UrlSegment,  UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor ( private authService : AuthService , private router : Router ) {}


  // canActivate(  ) {
  //   if(this.authService.isloggedIn() )
  //       return true
  //   return false;
  // }

  // canActivateChild( ) {
  //   if( this.authService.isloggedIn() )
  //     return true;
  //   return false;
  // }

  // canLoad() {
  //   if( this.authService.isloggedIn() )
  //       return true;
  //   return false;
  // }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;

    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  canLoad(route: Route): boolean {
    let url = `/${route.path}`;

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.authService.isloggedIn()) { return true; }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Create a dummy session id
    // let sessionId = 123456789;

    // Set our navigation extras object
    // that contains our global query params and fragment
    // let navigationExtras: NavigationExtras = {
    //   queryParams: { 'session_id': sessionId },
    //   fragment: 'anchor'
    // };

    // Navigate to the login page with extras
    // this.router.navigate(['/auth'], navigationExtras);
    this.router.navigate(['/auth']);
    return false;
  }

    // canActivateChild(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  // canLoad(
  //   route: Route,
  //   segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
  //   return true;
  // }

}
