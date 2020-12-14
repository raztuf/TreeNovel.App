import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbThemeModule, NbSidebarModule, NbLayoutModule, NbTabsetModule, NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbListModule, NbDialogModule } from '@nebular/theme';
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

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    ChapterComponent,
    NextChapterComponent
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
    NbEvaIconsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
