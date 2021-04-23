import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProduitSelectPage } from './produit-select.page';

const routes: Routes = [
  {
    path: '',
    component: ProduitSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProduitSelectPageRoutingModule {}
