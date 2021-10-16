import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private injector:Injector) { }
  //here e headeril bearer nte details undavum evide vech httprequestine modify cheyyunnu
  intercept(req:any,nxt:any)
  {
    let authService = this.injector.get(AuthService)
    // below is the core part ,we clone the request
    let tokenizedReq = req.clone(
      {
        setHeaders:{
          Authorization:`Bearer ${authService.getToken()}`
        }
      }
    )
    return nxt.handle(tokenizedReq)

  }
}

