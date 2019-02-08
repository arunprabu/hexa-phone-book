import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor( ){ // authService dep inj 

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    // biz logic to check whether the use has rights to access, logged in.. 
    // connect to AuthService 
    // authService.isLoggedIn()
    //work with util methods 
     return true;
  }

  //util methods here 
  //capture the requested url 
  //check if the user loggedin .. 
  // then redirect the user to requested url 
  // otherwise 
  // redirect the user to appropriate page 

}
