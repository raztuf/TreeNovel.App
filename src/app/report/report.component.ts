import { Component, OnInit } from '@angular/core';
import { Report } from '../models/content.model';
import { ReportService } from '../services/report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  listReport : Report[];

  constructor(
    private _reportService : ReportService
  ) { }

  ngOnInit(): void {
    this._reportService.getAll().subscribe((data : Report[]) => this.listReport = data);
  }

}
