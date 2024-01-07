import { Component, OnInit } from '@angular/core';
import { Task } from '../models/TaskDto';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../services/tasks.service';


export enum Status {
  Pending = 0,
  InProgress = 1,
  Completed = 2
}

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
  taskStatusEnum = Status;
  pageTitle = 'Task List';
  errorMessage = '';

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredTasks = this.listFilter ? this.performFilter(this.listFilter) : this.tasks;
  }

  filteredTasks: Task[] = [];
  tasks: Task[] = [];

  constructor(private tasksService: TasksService, private router: Router) { }

  performFilter(filterBy: string): Task[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.tasks.filter((task: Task) =>
      this.taskStatusEnum[task.status].toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  
  changeStatus(task: Task, newStatus: number): void {
    if (task.status !== 2) {
      const isConfirmed = window.confirm("Are you sure you want to update the status?");
      if (isConfirmed) {
        task.status = newStatus;
        this.tasksService.updateProduct(task).subscribe({
          next: () => {
            this.LoadTasks();
          }
        });
      }
    }
  }
  
  LoadTasks() : void {
    this.tasksService.getTasks().subscribe({
      next: tasks => {
        this.tasks = tasks;
        this.filteredTasks = this.tasks;
      },
      error: err => this.errorMessage = err
    });
  }
  onClick() : void{
    this.router.navigate(['/tasks/create-task']);
     
  }
  ngOnInit(): void {
     this.LoadTasks();
  }

  onDeleteTask(taskId : number ) : void{
      const isConfirmed = window.confirm("are you sure you want to delete");
      if(isConfirmed){
        this.tasksService.deleteTask(taskId).subscribe(
          {
              next : () => {
                this.LoadTasks();
              }
          }
        );

      }
  }

}
