import { Component, OnInit } from '@angular/core';
import { Chapter } from '../models/content.model';
import { ChapterService } from '../services/chapter.service'; 

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

    listChapter : Chapter[]
    activeLink : boolean = false;

    constructor(
      private _service : ChapterService
    ){}

    ngOnInit(): void {
      this.activeLink = sessionStorage.getItem('token') != '' ? true : false
      this._service.getAll().subscribe((data : Chapter[]) => this.listChapter = data)
    }
}
