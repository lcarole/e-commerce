import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataService, IProduit} from '../../services/data.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

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



}
