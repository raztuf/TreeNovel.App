import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NbThemeModule, NbLayoutModule, NbTabsetModule, NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbListModule, NbDialogModule } from '@nebular/theme';
import { NavComponent } from './nav/nav.component';
import { ChapterComponent } from './chapter/chapter.component';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ChapterComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NbThemeModule,
    NbLayoutModule,
    NbTabsetModule,
    NbButtonModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    NbListModule,
    NbDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
