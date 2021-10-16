import { Component } from '@angular/core';
// import { FormGroup,FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-reactive',
  templateUrl: './login-reactive.component.html',
  styleUrls: ['./login-reactive.component.css'],
})
export class LoginReactiveComponent {
  constructor(private fb: FormBuilder) {}

  // registerForm = new FormGroup({
  //   email:new FormControl(''),
  //   password:new FormControl('')
  // })

  // we plays with reactive forms by the help of formGroup and formControl
  // we use form builder to ease these process by replacing fromGroup and formControl

  registerForm = this.fb.group({
    email: [
      '',
      [
        Validators.pattern('^[a-z0-9.%+]+@[a-z09.-]+.[a-z]{2,4}'),
        Validators.required,
      ],
    ],
    password: ['', [Validators.minLength(6), Validators.required]],
  });
}
