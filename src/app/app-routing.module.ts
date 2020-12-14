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

const routes: Routes = [
  { path : 'home', component : HomeComponent },
  { path : 'login', component : LoginComponent},
  { path : 'register', component : RegisterComponent},
  { path : 'admin', component : AdminComponent },
  { path : 'chapter/:id', component : ChapterComponent },
  { path : 'reply/:id', component : NextChapterComponent },
  { path : 'submit', component : NewChapterComponent },
  { path : 'submit/:id', component : NewChapterSequelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
