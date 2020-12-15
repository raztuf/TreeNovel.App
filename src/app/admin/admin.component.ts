import { Component, OnInit } from '@angular/core';
import { User } from '../models/users.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  listUser : User[];

  constructor(
    private _userService : UserService
  ) { }

  ngOnInit(): void {
    this._userService.getAll().subscribe((data : User[]) => this.listUser = data)
  }

}
