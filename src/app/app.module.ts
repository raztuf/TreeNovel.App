import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbThemeModule, NbSidebarModule, NbLayoutModule, NbTabsetModule, NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbListModule, NbDialogModule, NbSelectModule, NbPopoverModule } from '@nebular/theme';
import { AuthComponent } from './common/auth/auth.component';
import { RegisterComponent } from './common/register/register.component';
import { LoginComponent } from './common/login/login.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AuthService } from './services/auth.service';
import { ChapterComponent } from './chapter/chapter.component';
import { NextChapterComponent } from './next-chapter/next-chapter.component';
import { UserService } from './services/user.service';
import { NewChapterComponent } from './new-chapter/new-chapter.component';
import { NewChapterSequelComponent } from './new-chapter-sequel/new-chapter-sequel.component';
import { CommentComponent } from './comment/comment.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { DiscussionRepliesComponent } from './discussion-replies/discussion-replies.component';
import { NewDiscussionComponent } from './new-discussion/new-discussion.component';
import { NewDiscussionReplyComponent } from './new-discussion-reply/new-discussion-reply.component';
import { ArticleComponent } from './article/article.component';
import { ArticleFeedComponent } from './article-feed/article-feed.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { NewReportComponent } from './new-report/new-report.component';
import { ReportComponent } from './report/report.component';
import { CategoryComponent } from './category/category.component';
import { CategoryMenuComponent } from './category-menu/category-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    ChapterComponent,
    NextChapterComponent,
    NewChapterComponent,
    NewChapterSequelComponent,
    CommentComponent,
    DiscussionComponent,
    DiscussionRepliesComponent,
    NewDiscussionComponent,
    NewDiscussionReplyComponent,
    ArticleComponent,
    ArticleFeedComponent,
    NewArticleComponent,
    NewReportComponent,
    ReportComponent,
    CategoryComponent,
    CategoryMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbTabsetModule,
    NbButtonModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    NbListModule,
    NbDialogModule,
    ReactiveFormsModule,
    RouterModule,
    NbSidebarModule,
    BrowserAnimationsModule,
    NbEvaIconsModule,
    NbSelectModule,
    NbPopoverModule
  ],
  providers: [AuthService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
