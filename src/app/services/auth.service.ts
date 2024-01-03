import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationDto } from '../models/AuthenticationDto';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseURL = 'http://localhost:5000/api/authentication';
  
  constructor(private http : HttpClient){

  }
  
login(authenticationDto: AuthenticationDto): Observable<any> {
  return this.http.post('http://localhost:5000/api/authentication/login', authenticationDto, { responseType: 'text' })
  .pipe(
    map((response: any) => {
      console.log('Received JWT:', response);
      localStorage.setItem('token',response);
    }),
    catchError((error: any) => {
      console.error('HTTP Error:', error);
      return throwError(() => new Error('HTTP Error occurred'));
    })
  );
}

}