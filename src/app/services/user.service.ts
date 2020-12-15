import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewUser, User } from '../models/users.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class UserService {

    private url : string = "http://localhost:4000/api";

    constructor(
        private _client : HttpClient,
        private _router : Router
    ){}

    getAll() : Observable<User[]> {
        return this._client.get<User[]>(this.url + "/user");
    }

    register(newUser : NewUser){
        this._client.post<NewUser>(this.url + "/user/register", newUser).subscribe({
            next : () => this._router.navigate(['/home']),
            error : (error) => {console.log(error), console.log("An incident has occured.")}
        });
    }

    getUser(id : number){
        return this._client.get<User>(this.url + "/user/" + id);
    }


}