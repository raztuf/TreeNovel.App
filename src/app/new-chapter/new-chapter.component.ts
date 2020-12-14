import { Component, OnInit } from '@angular/core';
import { Chapter } from '../models/content.model';
import { User } from '../models/users.model';
import { AuthService } from '../services/auth.service';
import { ChapterService } from '../services/chapter.service';
import { UserService } from '../services/user.service';

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
    private _userService : AuthService
  ) { }

  ngOnInit(): void {
    this.currentUser = this._userService.currentUser;
  }

  submit(){
    let chapter = new Chapter()
    chapter.title = this.title;
    chapter.content = this.content;
    chapter.date = new Date();
    chapter.writer = this.currentUser;
    chapter.encyclopedia = this.encyclopedia;
    this._chapterService.addChapter(chapter);
  }

}
