import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private auth: AuthService){}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const expectedRole = route.data.role;
    /* console.log('expected: ', expectedRole); */

    return this.auth.user.pipe(
      take(1),
      map(user =>{
        /* console.log('user in guard: ', user); */
        if(!user){
          this.router.navigateByUrl('/register');
          return false;
        }else{
          let role = user['role'];
          if(expectedRole == role){
            return true;
          }else{
            this.router.navigateByUrl('/home');
            return false;
          }
        }
      })
    )
  }

  
}
