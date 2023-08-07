import { Component, OnInit } from '@angular/core';
import { ReqresService } from '../reqres.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {
  dynamicId: any;
  email: string;
  firstName: string;
  lastName: string;

  constructor(private route: ActivatedRoute, private reqresService: ReqresService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.dynamicId = params.get('id');
    });
  }

  onSubmit() {
    if (!!this.email && !!this.firstName && !!this.lastName) {
      this.reqresService.postUser(this.dynamicId, {
        email: this.email,
        first_name: this.firstName,
        last_name: this.lastName,
      }).subscribe(
        (response: any) => {
          alert("Successfully done");
          this.router.navigate(['/users']);
        }
      )
    } else {
      alert('Invalid credentials. Please try again.');
    }
  }
}
