import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category, Chapter } from '../models/content.model';
import { CategoryService } from '../services/category.service';
import { ChapterService } from '../services/chapter.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  listChapter : Chapter[]
  currentCategory : Category

  constructor(
    private _chapterService : ChapterService,
    private _route : ActivatedRoute,
    private _categoryService : CategoryService
  ) { }

  ngOnInit(): void {
    let Id = this._route.snapshot.params['id'];
    this._categoryService.getOne(Id).subscribe((datac : Category) => this.currentCategory = datac);
    this._chapterService.getByGenre(this.currentCategory.name).subscribe((data : Chapter[]) => this.listChapter = data);
  }

}
