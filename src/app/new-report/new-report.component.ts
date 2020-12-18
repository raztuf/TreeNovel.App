import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Report } from '../models/content.model';
import { User } from '../models/users.model';
import { AuthService } from '../services/auth.service';
import { ReportService } from '../services/report.service';

@Component({
  selector: 'app-new-report',
  templateUrl: './new-report.component.html',
  styleUrls: ['./new-report.component.scss']
})
export class NewReportComponent implements OnInit {

  currentUser : User;
  title : string;
  content : string;
  subject : string;

  constructor(
    private _reportService : ReportService,
    private _router : Router,
    private _authService : AuthService
  ) { }

  ngOnInit(): void {
    this.currentUser = this._authService.currentUser;
  }

  submit(){
    let report = new Report()
    report.title = this.title;
    report.content = this.content;
    report.userId = this.currentUser.id;
    report.subject = this.subject;
    this._reportService.addReport(report);
    this._router.navigate(['/home']);
  }

}
