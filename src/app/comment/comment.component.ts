import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { CommentService } from '../services/comment.service';
import { Comment } from '../models/content.model';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})

export class CommentComponent implements OnInit {

  content : string;
  @Input() chapterId : number;

  constructor(
    private dialogRef : NbDialogRef<CommentComponent>,
    private _commentService : CommentService,
    private _userService : AuthService
  ) { }

  ngOnInit(): void {
  }

  submit(){
    let comment = new Comment()
    comment.content = this.content
    comment.chapterId = this.chapterId
    comment.date = new Date()
    comment.userId = this._userService.currentUser.id
    console.log(comment)
    this._commentService.addComment(comment)
    this.dialogRef.close()
  }
}
