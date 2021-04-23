import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProduitSelectPageRoutingModule } from './produit-select-routing.module';

import { ProduitSelectPage } from './produit-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProduitSelectPageRoutingModule
  ],
  declarations: [ProduitSelectPage]
})
export class ProduitSelectPageModule {}
