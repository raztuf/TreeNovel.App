import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DiscussionToApi } from '../models/content.model';
import { User } from '../models/users.model';
import { AuthService } from '../services/auth.service';
import { DiscussionService } from '../services/discussion.service';

@Component({
  selector: 'app-new-discussion',
  templateUrl: './new-discussion.component.html',
  styleUrls: ['./new-discussion.component.scss']
})
export class NewDiscussionComponent implements OnInit {

  currentUser : User;
  title : string;
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
    let d = new DiscussionToApi()
    d.title = this.title;
    d.content = this.content;
    d.date = new Date();
    d.userId = this.currentUser.id;
    this._discussionService.addDiscussion(d);
    this._router.navigate(['/discussion']);
  }


}
