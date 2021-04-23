import { Component, OnInit } from '@angular/core';
import {DataService} from '../../service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public produits = [];
  public BestSellProduits = [];
  

  constructor(
    private data: DataService,
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
  }

  //selectVal(produit.nom){}

}
