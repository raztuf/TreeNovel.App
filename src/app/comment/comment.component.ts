import { Component, Input, OnInit } from '@angular/core';
import { CommentService } from '../services/comment.service';
import { Comment, Chapter, CommentToApi } from '../models/content.model';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ChapterService } from '../services/chapter.service';
import { User } from '../models/users.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})

export class CommentComponent implements OnInit {

  listComment : Comment[] = [];
  pChapter : Chapter;
  currentUser : User;
  content : string;

  constructor(
    private _route : ActivatedRoute,
    private _commentService : CommentService,
    private _chapterService : ChapterService,
    private _authService : AuthService
  ) { }

  ngOnInit(): void {
    let Id = this._route.snapshot.params['id'];
    this._commentService.getByChapterId(Id).subscribe((data : Comment[]) => this.listComment = data);
    this._chapterService.getOne(Id).subscribe((data : Chapter) => this.pChapter = data);
    this.currentUser = this._authService.currentUser;
  }

  submit(){
    let Id = this._route.snapshot.params['id'];
    let c = new CommentToApi()
    c.content = this.content;
    c.userId = this.currentUser.id;
    c.chapterId = parseInt(Id);
    this._commentService.addComment(c);
  }
}
