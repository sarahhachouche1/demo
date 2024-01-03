import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavabrComponent } from './navabr/navabr.component';
import { RouterModule } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';



@NgModule({
  declarations: [AppComponent,
     NavabrComponent,
     TaskListComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([])
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
