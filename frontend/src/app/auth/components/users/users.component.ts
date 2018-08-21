import { Component, OnInit } from '@angular/core';
import {UserService} from 'app/auth/services';
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  displayedColumns = ['id', 'username', 'salary', 'age']; 
  constructor(private router: Router, private userService: UserService) {
  }
  
  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (data:any) => {
        //this.dataSource.data = data;
      }
    );
  }
}