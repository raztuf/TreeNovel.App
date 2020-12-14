import { Component, OnInit } from '@angular/core';
import { Chapter } from '../models/content.model';
import { ChapterService } from '../services/chapter.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-next-chapter',
  templateUrl: './next-chapter.component.html',
  styleUrls: ['./next-chapter.component.scss']
})
export class NextChapterComponent implements OnInit {

  listChapter : Chapter[]

  constructor(
    private _route : ActivatedRoute,
    private _service : ChapterService
  ) { }

  ngOnInit(): void {
    let Id = this._route.snapshot.params['id'];
    this._service.getReplies(Id).subscribe((data : Chapter[]) => this.listChapter = data)
  }

}
