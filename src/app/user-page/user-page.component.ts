import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/users.model';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  currentUser : User;
  pageUser : User;

  constructor(
    private _userService : UserService,
    private _route : ActivatedRoute,
    private _authService : AuthService
  ) { }

  ngOnInit(): void {
    let Id = this._route.snapshot.params['id'];
    this.currentUser = this._authService.currentUser;
    this._userService.getUser(Id).subscribe((data : User) => this.pageUser = data);
  }

}
