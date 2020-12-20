import { Component, OnInit } from '@angular/core';
import { Category } from '../models/content.model';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.scss']
})
export class CategoryMenuComponent implements OnInit {

  listCategory : Category[]

  constructor(
    private _service : CategoryService
  ) { }

  ngOnInit(): void {
    this._service.getAll().subscribe((data : Category[]) => this.listCategory = data)
  }

}
