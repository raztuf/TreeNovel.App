import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/content.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private url : string = "http://localhost:4000/api";

  constructor(
    private _client : HttpClient
  ) { }

  getAll() : Observable<Category[]> {
    return this._client.get<Category[]>(this.url + "/category")
  }

  getOne(id : number) : Observable<Category> {
    return this._client.get<Category>(this.url + "/category/" + id)
  }
}
