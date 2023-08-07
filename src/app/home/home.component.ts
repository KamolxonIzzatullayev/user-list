import { Component, OnInit } from '@angular/core';
import { ReqresService } from '../reqres.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: any[] = [];

  constructor(private reqresService: ReqresService, private router: Router) { }

  ngOnInit(): void {
    this.reqresService.getUsers().subscribe(
      (response: any) => {
        this.users = response.data;
      },
      (error: any) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  Logout() {
    this.router.navigate(['/login']);
  }
  AddUser() {
    this.router.navigate(['/register']);
  }
}
