import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { User } from '../models/UserDto';


@Injectable({
  providedIn: 'root'
})
export class UsersService{

  private usersUrl = "http://localhost:5000/api/users";
  constructor(private http : HttpClient) { }

  getUsers() : Observable<User[]>{
    const url = `${this.usersUrl}/subordinates/`;
    return this.http.get<User[]>(url)
    .pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(error => {
        console.error('Error getting users:', error);
        return throwError(() => error)
      })
    );
  }

  /*getTask(id : number) : Observable<Task>{
    const url = `${this.tasksUrl}/${id}`;
    return this.http.get<Task>(url)
      .pipe(
        tap(data => console.log('getTask: ' + JSON.stringify(data))),
        catchError(error => {
          console.error('Error getting task:', error);
          return throwError(() => error)
        })
      );
  }*/

  

}
