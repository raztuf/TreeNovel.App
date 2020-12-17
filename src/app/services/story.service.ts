import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Story, FStory } from '../models/content.model';

@Injectable({
    providedIn: 'root'
})

export class StoryService {

    private url : string = "http://localhost:4000/api";

    constructor(
        private _client : HttpClient
    ){}

    getAll() : Observable<FStory[]> {
        return this._client.get<FStory[]>(this.url + "/fstory");
    }

    getOne(id : number) : Observable<FStory> {
        return this._client.get<FStory>(this.url + "/fstory/" + id)
    }

    addStory(s : Story) {
        this._client.post(this.url+"/story", s).subscribe({
            next : () => console.log(),
            error : (error) => console.log(error)
        })
    }
}