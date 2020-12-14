import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chapter } from '../models/content.model';

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
        let myHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer' + sessionStorage.getItem('token')
        })
        return this._client.get<Chapter>(this.url + "/chapter/" + id, {headers : myHeaders})
    }

    getReplies(LastChapterId : number) : Observable<Chapter[]> {
        let myHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer' + sessionStorage.getItem('token')
        })
        return this._client.get<Chapter[]>(this.url + "/chapter/reply/" + LastChapterId, {headers : myHeaders})
    }
}