import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReqresService } from '../reqres.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  email: string;
  password: string;
  username: string;

  constructor(private router: Router,  private reqresService: ReqresService) { }

  onSubmit() {
    if (!!this.email && !!this.username && !!this.password) {
      this.reqresService.addUser({
        email: this.email,
        username: this.username,
        password: this.password,
      }).subscribe(
        (response: any) => {
          alert(response);
          this.router.navigate(['/login']);
        },
        (error: any) => {
          alert(error?.error?.error);
        }
      )
    } else {
      alert('Invalid credentials. Please try again.');
    }
  }
}
