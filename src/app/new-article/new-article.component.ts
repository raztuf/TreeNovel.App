import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../models/content.model';
import { User } from '../models/users.model';
import { ArticleService } from '../services/article.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss']
})
export class NewArticleComponent implements OnInit {

  currentUser : User;
  title : string;
  content : string;

  constructor(
    private _authService : AuthService,
    private _router : Router,
    private _articleService : ArticleService
  ) { }

  ngOnInit(): void {
    this.currentUser = this._authService.currentUser;
  }

  submit(){
    let article = new Article()
    article.title = this.title;
    article.content = this.content;
    this._articleService.addArticle(article);
    this._router.navigate(['/article']);
  }

}
