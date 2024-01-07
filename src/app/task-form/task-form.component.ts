import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
import { Task } from '../models/TaskDto';
import { AuthService } from '../services/auth.service';
import { TasksService } from '../services/tasks.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  taskForm! : FormGroup;
  task! : Task | null;
  isSaved : boolean = false;

  constructor(private fb: FormBuilder, private taskService: TasksService, private router : Router) { }
  
  save(): void {
    if (this.taskForm.valid) {
      this.task = {
        id : 0,
        title: this.taskForm.value.title,
        description: this.taskForm.value.description,
        dueDate: this.taskForm.value.dueDate,
        status: 0
      };
      this.taskService.createTask(this.task)
      .subscribe(
        (response: any) => {
          console.log(response , "fddfv");
          if (response.status === 201) {
             this.isSaved = true;
             console.log("JHJ",response.status)
           
          }});
    } else {
      console.log('Form data is invalid');
    }
  }


  ngOnInit(): void {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required]],
      description: [''],
      dueDate:[''],
    
    });

  }
}  
