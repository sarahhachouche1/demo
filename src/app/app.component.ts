import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Subscription } from 'rxjs';
import { AuthenticationDto } from './models/AuthenticationDto';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  loading = true;
  changesSaved = false;
  constructor(private authService : AuthService,private router :Router ){
      router.events.subscribe((routerEvent: Event) => {
        this.checkRouterEvent(routerEvent);
      });  
  }

  checkRouterEvent(routerEvent: Event): void {
      if (routerEvent instanceof NavigationStart) {
        this.loading = true;
      }
  
      if (routerEvent instanceof NavigationEnd ||
          routerEvent instanceof NavigationCancel ||
          routerEvent instanceof NavigationError) {
        this.loading = false;
      }
    }

  

}
    

