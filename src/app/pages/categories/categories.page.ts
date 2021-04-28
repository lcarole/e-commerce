import { Component, OnInit } from '@angular/core';
import {DataService, ICategorie} from '../../services/data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  public Categories = [];

  constructor(
    private data: DataService,
  ) { }

  ngOnInit() {
    this.Categories = this.data.getCategories();
  }

}
