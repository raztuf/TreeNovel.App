import { Component, OnInit } from '@angular/core';
import { Article } from '../models/content.model';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article-feed',
  templateUrl: './article-feed.component.html',
  styleUrls: ['./article-feed.component.scss']
})
export class ArticleFeedComponent implements OnInit {

  listArticle : Article[];

  constructor(
    private _articleService : ArticleService
  ) { }

  ngOnInit(): void {
    this._articleService.getAll().subscribe((data : Article[]) => this.listArticle = data);
    this.listArticle.reverse();
  }

}
