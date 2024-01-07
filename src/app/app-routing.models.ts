import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { TaskListComponent } from "./task-list/task-list.component";
import { TaskFormComponent } from "./task-form/task-form.component";
import { RouterModule, Routes } from "@angular/router";
import { authGuard } from "./services/auth.guard";
import { taskCreateGuard } from "./services/task-create.guard";
import { SubordinatesComponent } from "./subordinates/subordinates.component";
import { jwtDecode } from "jwt-decode";
import { managerGuard } from "./services/manager.guard";



const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'subordinates', component: SubordinatesComponent, canActivate: [managerGuard], },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
  ];
  @NgModule({
    imports:[ RouterModule.forRoot(routes),
     RouterModule.forChild([{
      path: 'tasks',
      canActivate : [authGuard],
      children:[
        {
            path : '',
            component : TaskListComponent,
        },
        {
          path: 'create-task',
          component : TaskFormComponent,
          canDeactivate : [taskCreateGuard]
        }
      ]
     }
     ])],
    exports: [RouterModule]
  
  })



  export class AppRoutingModule{}