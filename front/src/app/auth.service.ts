import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn() {
    //since i want true or false i put two exclamation mark before it 
    // if i give without ! it will give only value
    return !!localStorage.getItem('token')
  }

  getToken() {
    return localStorage.getItem('token')
  }

  constructor(private http:HttpClient) { }

  loginUser(user:any) {
    //if we omit any from below it will causes to error in component.ts file
    // i.e  error message , token is not defined
    return this.http.post<any>("http://localhost:3000/login",user)
    // .subscribe((data)=>{
    //   console.log(data)
    // })
  }

}
