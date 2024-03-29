import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { Task } from '../models/TaskDto';


@Injectable({
  providedIn: 'root'
})
export class TasksService{

  private tasksUrl = "http://localhost:5000/api/TaskToDoes";
  constructor(private http : HttpClient) { }

  getTasks() : Observable<Task[]>{
    return this.http.get<Task[]>(this.tasksUrl)
    .pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(error => {
        console.error('Error getting tasks:', error);
        return throwError(() => error)
      })
    );
  }

  getSubordinateTask(id : number) : Observable<Task[]>{
    const url = `${this.tasksUrl}/subordinates/${id}`;
    return this.http.get<Task[]>(url)
      .pipe(
        tap(data => console.log('getTask: ' + JSON.stringify(data))),
        catchError(error => {
          console.error('Error getting task:', error);
          return throwError(() => error)
        })
      );
  }


  createTask(task: Task): Observable<any> {
    return this.http.post(this.tasksUrl, task, {responseType: 'text', observe: 'response' })
      .pipe(
        map((response: HttpResponse<any>) => {
          console.log('Inside pipe - map');
          const data = response.body;
          const responseData = { status: response.status, data, };
          return responseData;
        }),
        catchError(error => {
          console.error('Error creating task:', error);
          return throwError(() => error);
        })
      )
  }
  


  
  deleteTask(id : number) : Observable<{}>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.tasksUrl}/${id}`;
    return this.http.delete<Task>(url, { headers })
      .pipe(
        tap(data => console.log('deleteTask: ' + id)),
        catchError( error => {
          console.error('Error deleting task:', error);
          return throwError(() => error)
        })
      );
  }

  updateProduct(task: Task): Observable<Task> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log(task.description)
    const url = `${this.tasksUrl}/${task.id}/ChangeStatus/${task.status}`;
    return this.http.patch<Task>(url, { headers })
      .pipe(
        tap(() => console.log('updateTask: ' + task.id)),
        map(() => task),
        catchError( error => {
          console.error('Error updating task:', error);
          return throwError(() => error)
        })
      );
  }
}
