import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {DataService} from '../../services/data.service';
import {IProduit} from "../../interfaces/IProduit";

@Component({
  selector: 'app-filtre-categorie',
  templateUrl: './filtre-categorie.page.html',
  styleUrls: ['./filtre-categorie.page.scss'],
})
export class FiltreCategoriePage implements OnInit {
  data:any;
  private listProduits:IProduit[];
  private produits:IProduit[];
  public filtreProduits:IProduit[] = [];

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

  recherche(event:any){
    this.produits = this.dataService.getProduits();
    const ev = event.detail.value;

    if(ev && ev.trim() != ''){
      this.produits = this.produits.filter((item)=>{
        return (item.nom.toLowerCase().indexOf(ev.toLowerCase())>-1)
      })
    }
    else{
      this.produits = [];
    }
  }

}
