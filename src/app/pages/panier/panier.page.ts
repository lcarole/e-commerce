import { Component, OnInit } from '@angular/core';
import {DataService, IProduit, IProduitPanier} from '../../services/data.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage implements OnInit {

  private Panier:IProduitPanier[] = [];

  constructor(
    private data: DataService,
  ) { }

  ngOnInit() {
    let exist:Boolean = false;
    let produit:IProduit;
    for (let i = 0; i < localStorage.length; i++){
      produit = localStorage[i];
      this.Panier.forEach((item) => {
        if(item.produit == produit){
          item.quantite ++;
          exist = true;
        }
      })
      if(exist == false){
        this.Panier.push(this.data.addPanier(produit));
      }
      else{
        exist = false;
      }
    }
  }

}
