import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { LoginComponent } from '../app/common/login/login.component';
import { RegisterComponent } from '../app/common/register/register.component';
import { AdminComponent } from '../app/admin/admin.component';
import { ChapterComponent } from '../app/chapter/chapter.component';

const routes: Routes = [
  { path : 'home', component : HomeComponent },
  { path : '', redirectTo : 'home', pathMatch : 'full' },
  { path : 'login', component : LoginComponent},
  { path : 'register', component : RegisterComponent},
  { path : 'admin', component : AdminComponent },
  { path : 'chapter/:id', component : ChapterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
