import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../services/tasks.service';
import { Task } from '../models/TaskDto';
import { Status } from '../task-list/task-list.component';

@Component({
  selector: 'app-subordinate-tasks',
  templateUrl: './subordinate-tasks.component.html',
  styleUrl: './subordinate-tasks.component.css'
})
export class SubordinateTasksComponent implements OnInit{
   constructor(private route: ActivatedRoute,
    private router : Router,
    private tasksService: TasksService){}
   tasks : Task[] = [];
   errorMessage = '';
   taskStatusEnum = Status;
   LoadTasks() : void {
    this.tasksService.getTasks().subscribe({
      next: tasks => {
        this.tasks = tasks;
      },
      error: err => this.errorMessage = err
    });
  }
 ngOnInit(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  if (id) {
    this.getsubTasks(id);
  }
}
  getsubTasks(id: number) : void {
      this.tasksService.getSubordinateTask(id).subscribe({
        next: tasks=> this.tasks= tasks,
        error: err => this.errorMessage = err
      });
    }
  }


