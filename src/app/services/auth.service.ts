import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { AuthenticationDto } from '../models/AuthenticationDto';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseURL = 'http://localhost:5000/api/authentication';
  
  constructor(private http : HttpClient){

  }
  IsLoggedIn(){
      if(localStorage.getItem('token')) return true;
      return false;
  }
  login(authenticationDto: AuthenticationDto): Observable<any> {
    return this.http.post(`${this.baseURL}/login`, authenticationDto, { responseType: 'text', observe: 'response' })
  
  .pipe(
    map((response: HttpResponse<any>) => {
      console.log(response, 'responseresponse')
      const token = response.body as string; 
      localStorage.setItem('token', token); 
      return { status: response.status, token, koko: response?.status };
    }),
    catchError((error) => {
      return throwError(error);
    })
  );
}

}