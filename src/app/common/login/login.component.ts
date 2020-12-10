import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFG : FormGroup

  constructor(
    private _builder : FormBuilder,
    private _authService : AuthService,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this.loginFG = this._builder.group({
      email : ['', [Validators.email, Validators.required]],
      password : ['', Validators.required]
    })
  }

  onSubmit(){
    const values = this.loginFG.value;
    this._authService.login(values['mail'], values['password'])
    this._router.navigate(['/home']);
  }

}
