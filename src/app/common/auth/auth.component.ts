import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../../models/users.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  isConnectedSub : Subscription;
  currentUser : User;

  constructor(
    private _authService : AuthService
  ) { }

  ngOnInit(): void {
    this._authService.logout();
    this.isConnectedSub = this._authService.isConnectedSubject.subscribe(
      () => {this.currentUser = this._authService.currentUser}
    )
  }

  logout(){
    this._authService.logout()
  }

}
