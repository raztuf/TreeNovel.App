import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chapter, ChapterToApi } from '../models/content.model';
import { User } from '../models/users.model';
import { AuthService } from '../services/auth.service';
import { ChapterService } from '../services/chapter.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-new-chapter',
  templateUrl: './new-chapter-sequel.component.html',
  styleUrls: ['./new-chapter-sequel.component.scss']
})
export class NewChapterSequelComponent implements OnInit {

  title : string;
  content : string;
  encyclopedia : string;
  currentUser : User;

  constructor(
    private _chapterService : ChapterService,
    private _route : ActivatedRoute,
    private _userService : AuthService
  ) { }

  ngOnInit(): void {
    this.currentUser = this._userService.currentUser;
  }

  submit(){
    let Id = this._route.snapshot.params['id'];
    let chapter = new ChapterToApi()
    chapter.title = this.title;
    chapter.content = this.content;
    chapter.date = new Date();
    chapter.userId = this.currentUser.id;
    chapter.encyclopedia = this.encyclopedia;
    chapter.lastChapterId = Id;
    this._chapterService.addChapter(chapter);
  }

}