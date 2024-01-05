import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavabrComponent } from './navabr/navabr.component';
import { RouterModule , Routes} from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { LoginComponent } from './login/login.component';
import { TaskFormComponent } from './task-form/task-form.component';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'tasks', component: TaskListComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'create-task', component : TaskFormComponent },
];


@NgModule({
  declarations: [AppComponent,
     NavabrComponent,
     TaskListComponent,
     LoginComponent,
     TaskFormComponent
   ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    MatFormFieldModule,
     MatSelectModule,
      FormsModule, 
      ReactiveFormsModule, 
      MatInputModule
   
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
