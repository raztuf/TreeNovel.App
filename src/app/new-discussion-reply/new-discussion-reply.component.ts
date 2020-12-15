import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DiscussionToApi } from '../models/content.model';
import { User } from '../models/users.model';
import { AuthService } from '../services/auth.service';
import { DiscussionService } from '../services/discussion.service';

@Component({
  selector: 'app-new-discussion-reply',
  templateUrl: './new-discussion-reply.component.html',
  styleUrls: ['./new-discussion-reply.component.scss']
})
export class NewDiscussionReplyComponent implements OnInit {

  currentUser : User;
  content : string;

  constructor(
    private _authService : AuthService,
    private _route : ActivatedRoute,
    private _discussionService : DiscussionService,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this.currentUser = this._authService.currentUser;
  }

  submit(){
    let Id = this._route.snapshot.params['id'];
    let d = new DiscussionToApi()
    d.title = "";
    d.content = this.content;
    d.userId = this.currentUser.id;
    d.replyToId = parseInt(Id);
    this._discussionService.addDiscussion(d);
    this._router.navigate(['/discussion']);
  }

}
