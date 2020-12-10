import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../models/content.model';

@Injectable({
    providedIn: 'root'
})

export class CommentService {

    private url : string = "http://localhost:4000/api";
    
    constructor(
        private _client : HttpClient
    ){}

    getByChapterId(ChapterId : number) : Observable<Comment[]> {
        return this._client.get<Comment[]>(this.url + "/comment/chapter/" + ChapterId)
    }

    addComment(c : Comment) {
        this._client.post(this.url + "/comment", c).subscribe({
            next : () => console.log(),
            error : (error) => console.log(error)
        })
    }

    delete(Id : number) : Observable<any> {
        return this._client.delete(this.url + "/comment/" + Id)
    }
}