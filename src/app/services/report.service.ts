import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Report } from '../models/content.model';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private url : string = "http://localhost:4000/api";

  constructor(
    private _client : HttpClient
  ) { }

  getAll() : Observable<Report[]> {
    return this._client.get<Report[]>(this.url + "/report")
  }

  getOne(id : number) : Observable<Report> {
    return this._client.get<Report>(this.url + "/report/" + id)
  }

  addReport(r : Report) {
    this._client.post(this.url+"/report", r).subscribe({
      next : () => console.log(),
      error : (error) => console.log(error)
    })
  }
}
