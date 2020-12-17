import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { LoginComponent } from '../app/common/login/login.component';
import { RegisterComponent } from '../app/common/register/register.component';
import { AdminComponent } from '../app/admin/admin.component';
import { ChapterComponent } from '../app/chapter/chapter.component';
import { NextChapterComponent } from './next-chapter/next-chapter.component';
import { NewChapterComponent } from './new-chapter/new-chapter.component';
import { NewChapterSequelComponent } from './new-chapter-sequel/new-chapter-sequel.component';
import { UserPageComponent } from './user-page/user-page.component';
import { CommentComponent } from './comment/comment.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { DiscussionRepliesComponent } from './discussion-replies/discussion-replies.component';
import { NewDiscussionComponent } from './new-discussion/new-discussion.component';
import { NewDiscussionReplyComponent } from './new-discussion-reply/new-discussion-reply.component';
import { StoryMenuComponent } from './story-menu/story-menu.component';
import { StoryComponent } from './story/story.component';
import { StoryResolver } from './services/story-resolver';

const routes: Routes = [
  { path : 'home', component : HomeComponent },
  { path : 'login', component : LoginComponent},
  { path : 'register', component : RegisterComponent},
  { path : 'admin', component : AdminComponent },
  { path : 'chapter/:id', component : ChapterComponent },
  { path : 'reply/:id', component : NextChapterComponent },
  { path : 'submit', component : NewChapterComponent },
  { path : 'submit/:id', component : NewChapterSequelComponent },
  { path : 'user/:id', component : UserPageComponent },
  { path : 'comments/:id', component : CommentComponent },
  { path : 'discussion', component : DiscussionComponent },
  { path : 'discussion/:id', component : DiscussionRepliesComponent },
  { path : 'newdiscussion', component : NewDiscussionComponent },
  { path : 'newdiscussion/:id', component : NewDiscussionReplyComponent },
  { path : 'story', component : StoryMenuComponent },
  { path : 'story/:id', component : StoryComponent, 
    resolve : { currentStory : StoryResolver }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
