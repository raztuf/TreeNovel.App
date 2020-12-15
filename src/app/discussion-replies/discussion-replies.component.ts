import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Discussion } from '../models/content.model';
import { DiscussionService } from '../services/discussion.service';

@Component({
  selector: 'app-discussion-replies',
  templateUrl: './discussion-replies.component.html',
  styleUrls: ['./discussion-replies.component.scss']
})
export class DiscussionRepliesComponent implements OnInit {

  currentDiscussion : Discussion;
  repliesList : Discussion[];

  constructor(
    private _discussionService : DiscussionService,
    private _route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    let Id = this._route.snapshot.params['id'];
    this._discussionService.getOne(Id).subscribe((data : Discussion) => this.currentDiscussion = data);
    this._discussionService.getReplies(Id).subscribe((data : Discussion[]) => this.repliesList = data);
  }

}
