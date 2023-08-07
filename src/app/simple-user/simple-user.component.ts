import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReqresService } from '../reqres.service';

@Component({
  selector: 'app-simple-user',
  templateUrl: './simple-user.component.html',
  styleUrls: ['./simple-user.component.scss']
})
export class SimpleUserComponent implements OnInit {
  dynamicId: any;
  user: any = undefined;

  constructor(private route: ActivatedRoute, private reqresService: ReqresService, private router: Router) { }

  ngOnInit() {
    // Retrieve the dynamic parameter from the URL
    this.route.paramMap.subscribe(params => {
      this.dynamicId = params.get('id');
    });

    this.reqresService.getUserById(this.dynamicId).subscribe(
      (response: any) => {
        this.user = response.data;
      },
      (error: any) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  deleteUser() {
    this.reqresService.deleteUser(this.dynamicId).subscribe(
      (response: any) => {
        alert("Successfully done");
        this.router.navigate(['/users']);
      }
    )
  }

  editUser() {
    this.router.navigate(['/user/edit/', this.dynamicId])
  }
}