import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Task } from '../models/TaskDto';


@Injectable({
  providedIn: 'root'
})
export class TasksService {
 

  private tasksUrl = "http://localhost:5000/api/TaskToDoes";
  constructor(private http : HttpClient) { }

  getTasks() : Observable<Task[]>{
    return this.http.get<Task[]>(this.tasksUrl)
    .pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(error => {
        console.error('Error deleting task:', error);
        return throwError(() => error)
      })
    );
  }

  getTask(id : number) : Observable<Task>{
    const url = `${this.tasksUrl}/${id}`;
    return this.http.get<Task>(url)
      .pipe(
        tap(data => console.log('getTask: ' + JSON.stringify(data))),
        catchError(error => {
          console.error('Error deleting task:', error);
          return throwError(() => error)
        })
      );
  }

  createTask(task : Task) : Observable<Task>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    task.id = null;
    return this.http.post<Task>(this.tasksUrl, task, { headers })
      .pipe(
        tap(data => console.log('createTask: ' + JSON.stringify(data))),
        catchError(error => {
          console.error('Error deleting task:', error);
          return throwError(() => error)
        })
      );
  }
  
  deleteTask(id : number) : Observable<{}>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.tasksUrl}/${id}`;
    return this.http.delete<Task>(url, { headers })
      .pipe(
        tap(data => console.log('deleteProduct: ' + id)),
        catchError( error => {
          console.error('Error deleting task:', error);
          return throwError(() => error)
        })
      );
  }
}
