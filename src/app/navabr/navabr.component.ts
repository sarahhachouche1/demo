import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {jwtDecode} from 'jwt-decode';

@Component({
  selector: 'app-navabr',
  templateUrl: './navabr.component.html',
  styleUrl: './navabr.component.css'
})

export class NavabrComponent {

  token = localStorage.getItem('token') ?? "";
  decoded : any= jwtDecode(this.token?.toString()) ?? {};
  title = `${this.decoded.username}`;
  constructor(private router : Router){}    

  isManager = this.decoded.Role === 'Manager'; 
  logOut() : void{
    console.log(this.decoded);
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
 }
}
