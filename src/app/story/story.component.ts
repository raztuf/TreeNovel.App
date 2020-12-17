import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chapter, FStory } from '../models/content.model';
import { ChapterService } from '../services/chapter.service';
import { StoryService } from '../services/story.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})

export class StoryComponent implements OnInit {

  public currentStory : FStory;
  public currentChapter : Chapter;
  listChapter : Chapter[];

  constructor(
    private _route : ActivatedRoute,
    private _storyService : StoryService,
    private _chapterService : ChapterService
  ) { }

  ngOnInit(): void {
    let Id = this._route.snapshot.params['id'];

    this._route.data.subscribe((data : FStory) => this.currentStory = data);
    console.log(this.currentStory);

    this._chapterService.getOne(this.currentStory.lastId).subscribe((datac : Chapter) => {
      this.currentChapter = datac;
      let i = 0;
      let id = this.currentChapter.id;
      while(id != 0)
      {
        this._chapterService.getOne(id).subscribe((datab : Chapter) => {
          this.listChapter[i] = datab;
          id = datab.lastChapterId;
        });
        i++;
      }
      this.listChapter.reverse();
    });
  }
}