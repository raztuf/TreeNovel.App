import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chapter } from '../models/content.model';
import { ChapterService } from '../services/chapter.service';
import { User } from '../models/users.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.scss']
})

export class ChapterComponent implements OnInit {

  currentUser : User;
  currentChapter : Chapter;
  commentToggled : boolean;
  userRole : string = sessionStorage.getItem("role");
  repliesList : Chapter[] = [];
  
  constructor(
    private _chapterService : ChapterService,
    private _route : ActivatedRoute,
    private _authService : AuthService
  ){}

  ngOnInit(): void {
    let Id = this._route.snapshot.params['id'];
    this._chapterService.getOne(Id).subscribe((data : Chapter) => this.currentChapter = data);
    this._chapterService.getReplies(Id).subscribe((datar : Chapter[]) => this.repliesList = datar);
    this.currentUser = this._authService.currentUser;
  }
}
