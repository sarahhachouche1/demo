import { Component, OnInit } from '@angular/core';
import { User } from '../models/UserDto';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-subordinates',
  templateUrl: './subordinates.component.html',
  styleUrl: './subordinates.component.css'
})
export class SubordinatesComponent implements OnInit {
  errorMessage = '';
  subordinates: User[] = [];

  constructor(private usersService: UsersService, private router: Router) { }
 
  LoadUsers() : void {
    this.usersService.getUsers().subscribe({
      next: (subordinates: User[]) => {
        this.subordinates = subordinates;
      },
      error: (err: string) => this.errorMessage = err
    });
  }
  ngOnInit(): void {
     this.LoadUsers();
  }
}

