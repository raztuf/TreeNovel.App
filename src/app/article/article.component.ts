import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../models/content.model';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  currentArticle : Article;

  constructor(
    private _articleService : ArticleService,
    private _route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    let Id = this._route.snapshot.params['id'];
    this._articleService.getOne(Id).subscribe((data : Article) => this.currentArticle = data);
  }

}
