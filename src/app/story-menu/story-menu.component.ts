import { Component, OnInit } from '@angular/core';
import { FStory } from '../models/content.model';
import { StoryService } from '../services/story.service';

@Component({
  selector: 'app-story-menu',
  templateUrl: './story-menu.component.html',
  styleUrls: ['./story-menu.component.scss']
})
export class StoryMenuComponent implements OnInit {

  listStory : FStory[];

  constructor(
    private _storyService : StoryService
  ) { }

  ngOnInit(): void {
    this._storyService.getAll().subscribe((data : FStory[]) => this.listStory = data)
  }

}
