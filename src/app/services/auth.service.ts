import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/users.model';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class LoginInfo{
    mail : string;
    password : string;
}

export class AuthService {
    private url : string = "http://localhost:4000/api";
    currentUser : User;
    isConnected : boolean = false;
    isConnectedSubject : Subject<User> = new Subject<User>();
    emitIsConnected(){
        this.isConnectedSubject.next(this.currentUser)
    }
    constructor(
        private _client : HttpClient,
        private _route : Router
    ){}
    login(mail : string, password : string){
        var user = new LoginInfo();
        user.mail = mail;
        user.password = password;
        this._client.post<User>(this.url + "/auth/auth", user).subscribe({
            next : (data : User) => {
                this.currentUser = data;
                sessionStorage.setItem("token", this.currentUser.token)
                sessionStorage.setItem("role", this.currentUser.isAdmin ? "admin" : "user")
                this.emitIsConnected()
            },
            error : error => {console.log(error); console.log("Un incident c'est produit.")}
        })
    }
    logout(){
        this.currentUser = null;
        sessionStorage.clear();
        this.emitIsConnected();
        this._route.navigate(['/home'])
    }
}
