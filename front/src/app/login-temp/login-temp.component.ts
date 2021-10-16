import { Component } from '@angular/core';

@Component({
  selector: 'app-login-temp',
  templateUrl: './login-temp.component.html',
  styleUrls: ['./login-temp.component.css'],
})
export class LoginTempComponent {
  title: string = 'form-demo';
  User = { username: '', password: '', timeFrom: '', timeTo: '' };
  userverify(): void {
    console.log(this.User);
    alert('successfullly longinned');
  }
}
