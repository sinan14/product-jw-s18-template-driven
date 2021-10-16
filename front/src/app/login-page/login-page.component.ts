import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  constructor(private _router: Router, public _auth: AuthService) {}

  // this below object has to play with template driven login form
  user = { email: '', uname: '', password: '' };
  loginUser() {
    this.user.uname = 'admin';
    this.user.password = 'admin123';
    console.log(this.user);

    this._auth
      .loginUser(this.user)
      //to store the token we subscribed the response not data
      .subscribe(
        (res) => {
          //token local storage ill keep cheyyunnu
          //you can check this token in application of developeer tools
          localStorage.setItem('token', res.token);
          //to navigate from any side we imported and created an instance of Router
          this._router.navigate(['/']);
        },
        (err) => {
          console.log(err);
          this._router.navigate(['/']);
        }
      );
  }
}
