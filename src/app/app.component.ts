import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Subscription } from 'rxjs';
import { AuthenticationDto } from './models/AuthenticationDto';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
    
    authenticationDto : AuthenticationDto= {
       userName : "",
       password : "",
    };
    message! : string;
    private loginSubscription!: Subscription;
  constructor(private authService: AuthService) {}
  
  onSubmit() {
    this.loginSubscription = this.authService.login(this.authenticationDto)
    .subscribe({
      next: response => {
          this.message = 'Login successful!';
        },
      error: error => {
        console.log(error);
        this.message = 'Invalid email or password.';
      },
      complete: () => {
        this.loginSubscription.unsubscribe();
      }
    });
  }
}
    

