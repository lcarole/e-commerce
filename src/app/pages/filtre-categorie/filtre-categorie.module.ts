import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiltreCategoriePageRoutingModule } from './filtre-categorie-routing.module';

import { FiltreCategoriePage } from './filtre-categorie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiltreCategoriePageRoutingModule
  ],
  declarations: [FiltreCategoriePage]
})
export class FiltreCategoriePageModule {}
