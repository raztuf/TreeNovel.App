import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Story } from '../models/content.model';

@Injectable({
    providedIn: 'root'
})

export class ChapterService {

    private url : string = "http://localhost:4000/api";

    constructor(
        private _client : HttpClient
    ){}

    getAll() : Observable<Story[]> {
        return this._client.get<Story[]>(this.url + "/story");
    }

    getOne(id : number) : Observable<Story> {
        return this._client.get<Story>(this.url + "/story/" + id)
    }

    addStory(s : Story) {
        this._client.post(this.url+"/story", s).subscribe({
            next : () => console.log(),
            error : (error) => console.log(error)
        })
    }
}