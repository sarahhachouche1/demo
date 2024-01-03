import { Component, OnInit } from '@angular/core';
import { Task } from '../models/TaskDto';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
  pageTitle = 'Product List';
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

  constructor(private tasksService: TasksService) { }

  performFilter(filterBy: string): Task[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.tasks.filter((task: Task) =>
      task.status.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit(): void {
    this.tasksService.getTasks().subscribe({
      next: tasks => {
        this.tasks = tasks;
        this.filteredTasks = this.tasks;
      },
      error: err => this.errorMessage = err
    });
  }

}
