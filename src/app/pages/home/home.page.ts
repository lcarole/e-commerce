import { Component, OnInit } from '@angular/core';
import {DataService, IProduit} from '../../services/data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public produits:IProduit[] = [];
  public BestSellProduits:IProduit[] = [];
  

  constructor(
    private data: DataService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.BestSellProduits = this.data.getBestSellProduits();
  }

  recherche(event:any){
    this.produits = this.data.getProduits();
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

  detail(produit:IProduit){
    
    this.router.navigate(['/detail-produit/'+JSON.stringify(produit.id)]);
  }

}
