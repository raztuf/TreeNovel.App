import { Component, OnInit } from '@angular/core';
import { Discussion } from '../models/content.model';
import { DiscussionService } from '../services/discussion.service';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.scss']
})
export class DiscussionComponent implements OnInit {

  listDiscussion : Discussion[];

  constructor(
    private _discussionService : DiscussionService
  ) { }

  ngOnInit(): void {
    this._discussionService.getAll().subscribe((data : Discussion[]) => this.listDiscussion = data)
  }

}
