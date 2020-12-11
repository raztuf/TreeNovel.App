import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chapter, Comment } from '../models/content.model';
import { ChapterService } from '../services/chapter.service';
import { CommentService } from '../services/comment.service';
import { NbDialogService } from '@nebular/theme';
import { CommentComponent } from '../comment/comment.component';
import { User } from '../models/users.model';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.scss']
})

export class ChapterComponent implements OnInit {

  userRole : string = sessionStorage.getItem("role");
  currentChapter : Chapter;
  commentList : Comment[] = []
  commentToggled : boolean;
  currentUser : User;
  
  constructor(
    private _chapterService : ChapterService,
    private _commentService : CommentService,
    private _route : ActivatedRoute,
    private _dialog : NbDialogService,
    private _authService : AuthService,
    private _userService : UserService
  ){}

  ngOnInit(): void {
    let Id = this._route.snapshot.params['id'];
    this._chapterService.getOne(Id).subscribe((data : Chapter) => this.currentChapter = data);
    this._commentService.getByChapterId(Id).subscribe((datac : Comment[]) => this.commentList = datac);
    this.currentUser = this._authService.currentUser;
  }

  coToggle(){
    this.commentToggled = !this.commentToggled;
  }

  addComment(){
    let ref = this._dialog.open(CommentComponent, {
      context : {
        chapterId : this.currentChapter.id
      },
      closeOnBackdropClick : true
    })

    ref.onClose.subscribe(() => {
      this._commentService.getByChapterId(this.currentChapter.id).subscribe((datac : Comment[]) => this.commentList = datac);
    })
  }

  deleteComment(id : number){
    this._commentService.delete(id).subscribe({ next : () => 
      this._commentService.getByChapterId(this.currentChapter.id).subscribe((datac : Comment[]) => this.commentList = datac)})
  }
}
