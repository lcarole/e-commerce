import { Component, OnInit } from '@angular/core';
import {DataService, ICategorie} from '../../services/data.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  public Categories:ICategorie[] = [];

  constructor(
    private data: DataService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.Categories = this.data.getCategories();
  }

  filterProduit(Categorie:ICategorie){
    this.router.navigate(['/filtre-categorie/'+JSON.stringify(Categorie.id)])
  }

}
