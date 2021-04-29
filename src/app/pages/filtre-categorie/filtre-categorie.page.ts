import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {DataService, IProduit} from '../../services/data.service';

@Component({
  selector: 'app-filtre-categorie',
  templateUrl: './filtre-categorie.page.html',
  styleUrls: ['./filtre-categorie.page.scss'],
})
export class FiltreCategoriePage implements OnInit {
  data:any;
  private listProduits:IProduit[];
  private filtreProduits:IProduit[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService:DataService,
    private router:Router
  ) {
      this.data = this.activatedRoute.snapshot.paramMap.get('fP');

   }

  ngOnInit() {
    console.log(this.data);
    this.listProduits = this.dataService.getProduits();
    this.listProduits.forEach((item) => {
      console.log(item.categorie);
      if(item.categorie == this.data){
        console.log(item.nom);
        this.filtreProduits.push(item);
      }
    });
  }

  detail(produit:IProduit){
    
    this.router.navigate(['/detail-produit/'+JSON.stringify(produit.id)]);
  }

}
