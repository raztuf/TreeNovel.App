import { Component, OnInit } from '@angular/core';
import { Chapter, ChapterToApi } from '../models/content.model';
import { User } from '../models/users.model';
import { AuthService } from '../services/auth.service';
import { ChapterService } from '../services/chapter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-chapter',
  templateUrl: './new-chapter.component.html',
  styleUrls: ['./new-chapter.component.scss']
})
export class NewChapterComponent implements OnInit {

  title : string;
  content : string;
  encyclopedia : string;
  currentUser : User;

  constructor(
    private _chapterService : ChapterService,
    private _authService : AuthService,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this.currentUser = this._authService.currentUser;
  }

  submit(){
    let chapter = new ChapterToApi()
    chapter.title = this.title;
    chapter.content = this.content;
    chapter.date = new Date();
    chapter.userId= this.currentUser.id;
    chapter.encyclopedia = this.encyclopedia;
    this._chapterService.addChapter(chapter);
    this._router.navigate(['/home']);
  }

}
