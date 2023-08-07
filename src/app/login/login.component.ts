import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string;
  password: string;

  constructor(private router: Router){}

  onSubmit() {
    if (this.email === 'admin' && this.password === 'admin') {
      this.router.navigate(['/users']);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  }
}
