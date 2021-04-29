import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiltreCategoriePage } from './filtre-categorie.page';

const routes: Routes = [
  {
    path: '',
    component: FiltreCategoriePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiltreCategoriePageRoutingModule {}
