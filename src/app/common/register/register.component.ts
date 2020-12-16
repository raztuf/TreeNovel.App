import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewUser } from '../../models/users.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  newUserFG : FormGroup

  constructor(
    private _service : UserService,
    private _builder : FormBuilder,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this.newUserFG = this._builder.group({
      username : ['', Validators.required],
      mail : ['', [Validators.email, Validators.required]],
      password : ['', Validators.required]
    })
  }

  onSubmit(){
    let values = this.newUserFG.value
    let newUser = new NewUser()
    newUser.mail = values['mail']
    newUser.password = values['password']
    newUser.username = values['username']
    this._service.register(newUser)
    this._router.navigate(['/home']);
  }

}
