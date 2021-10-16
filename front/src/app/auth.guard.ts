import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
    constructor(private _auth:AuthService,private _router:Router){};
    //since below function returns a boolean value we set it's type as boolean
    canActivate():boolean{
        if(this._auth.loggedIn){
          return true
        } else {
          this._router.navigate['/']
          return false;
        }
    }
}
  

