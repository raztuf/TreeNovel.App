import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/content.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private url : string = "http://localhost:4000/api";

  constructor(
    private _client : HttpClient
  ) { }

  getAll() : Observable<Article[]> {
    return this._client.get<Article[]>(this.url + "/article")
  }

  getOne(id : number) : Observable<Article> {
    return this._client.get<Article>(this.url + "/article/" + id)
  }

  addArticle(a : Article) {
    this._client.post(this.url+"/article", a).subscribe({
      next : () => console.log(),
      error : (error) => console.log(error)
    })
  }
}
