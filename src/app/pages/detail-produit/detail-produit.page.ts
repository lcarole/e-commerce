import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataService, IProduit} from '../../services/data.service';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.page.html',
  styleUrls: ['./detail-produit.page.scss'],
})
export class DetailProduitPage implements OnInit {

  data:any;
  public listProduits:IProduit[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService:DataService,
  ) {
      this.data = this.activatedRoute.snapshot.paramMap.get('dP');

   }

  ngOnInit() {
    this.listProduits = this.dataService.getProduits();
    this.listProduits.forEach((item) => {
      if(item.id == this.data){
        this.data = item;
      }
    });
  }

  addPanier(){
    
    if (localStorage.length == null){
      length = 0;
    }
    else{
      length = localStorage.length;
    }
    localStorage.setItem(length.toString(),this.data);
  }
}
