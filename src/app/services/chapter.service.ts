import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chapter, ChapterToApi } from '../models/content.model';

@Injectable({
    providedIn: 'root'
})

export class ChapterService {

    private url : string = "http://localhost:4000/api";

    constructor(
        private _client : HttpClient
    ){}

    getAll() : Observable<Chapter[]> {
        return this._client.get<Chapter[]>(this.url + "/chapter")
    }

    getOne(id : number) : Observable<Chapter> {
        return this._client.get<Chapter>(this.url + "/chapter/" + id)
    }

    getReplies(LastChapterId : number) : Observable<Chapter[]> {
        return this._client.get<Chapter[]>(this.url + "/chapter/reply/" + LastChapterId)
    }

    addChapter(c : ChapterToApi) {
        this._client.post(this.url+"/chapter", c).subscribe({
            next : () => console.log(),
            error : (error) => console.log(error)
        })
    }
}