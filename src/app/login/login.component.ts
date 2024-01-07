import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthenticationDto } from '../models/AuthenticationDto';

@Component({
  templateUrl: './login.component.html',
  selector : "app-login"
})
export class LoginComponent {
  errorMessage!: string;
  pageTitle = 'Log In';
  required: any;

  constructor(private authService: AuthService,
              private router: Router) { }

  login(loginForm: NgForm): void {
    if (loginForm && loginForm.valid) {
      const userName = loginForm.form.value.userName;
      const password = loginForm.form.value.password;

      const authenticationDto: AuthenticationDto = {
        userName: userName,
        password: password,
      };
      this.authService.login(authenticationDto).subscribe(
        (response: any) => {
          console.log(response, 'fddfvvv')
          if (response.status === 200) {
             this.router.navigate(['/tasks'], { replaceUrl: true });
          }});
    } else {
      this.errorMessage = 'Please enter a user name and password.';
    }
  }
}