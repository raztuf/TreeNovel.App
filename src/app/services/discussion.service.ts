import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Discussion, DiscussionToApi} from '../models/content.model';

@Injectable({
    providedIn: 'root'
})

export class DiscussionService {

    private url : string = "http://localhost:4000/api";

    constructor(
        private _client : HttpClient
    ){}

    getAll() : Observable<Discussion[]> {
        return this._client.get<Discussion[]>(this.url + "/discussion")
    }

    getOne(id : number) : Observable<Discussion> {
        return this._client.get<Discussion>(this.url + "/discussion/" + id)
    }

    getReplies(id : number) : Observable<Discussion[]> {
        return this._client.get<Discussion[]>(this.url + "/discussion/thread/" + id)
    }

    addDiscussion(d : DiscussionToApi) {
        this._client.post(this.url+"/discussion", d).subscribe({
            next : () => console.log(),
            error : (error) => console.log(error)
        })
    }
}