import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if( localStorage.getItem( 'access_token' )) {

      // if( state.url.includes( 'auth' )) {
      //   this.router.navigate([ '/account' ]);
      // }
      return true;
    }

    else {
      this.router.navigate([ '/auth/login' ]);
      return false;
    }
  }
}
