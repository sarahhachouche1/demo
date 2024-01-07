import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NavabrComponent } from './navabr/navabr.component';
import { TaskListComponent } from './task-list/task-list.component';
import { LoginComponent } from './login/login.component';
import { TaskFormComponent } from './task-form/task-form.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.models';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { TokenInterceptor } from './utils/token.interceptor';
import { SubordinatesComponent } from './subordinates/subordinates.component';

@NgModule({
  declarations: [AppComponent,
     NavabrComponent,
     TaskListComponent,
     LoginComponent,
     TaskFormComponent,
     SubordinatesComponent
   ],
  imports:[
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule, 
    ReactiveFormsModule, 
    MatInputModule,
    AppRoutingModule,
    MatProgressSpinnerModule
  ],
  providers: [ 
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true,
  },
],
  bootstrap: [AppComponent]
})

export class AppModule { }
