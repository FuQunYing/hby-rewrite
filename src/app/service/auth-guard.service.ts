import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private authService: AuthService,
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    return this.checkAuth(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    return this.checkUser(url);
  }

  checkAuth(url): boolean {
    if (localStorage.getItem('user')) {
      console.log('成功登录');
      return true;
    }
    console.log('未登录');
    this.router.navigate(['login']);
    return false;
  }

  checkUser(url): boolean {
    const authURL = JSON.parse(localStorage.getItem('user')).menu.power;
    let str = url.substring(1);
    if (str === 'dashboard') {
      str += '/';
    }
    for (const i in authURL) {
      if (i === str ) {
        if (authURL[i] === '111') {
          return true;
        } else {
          this.router.navigate(['/403']);
          return false;
        }
      }
    }
    return true;
  }

}
