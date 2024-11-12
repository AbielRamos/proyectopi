import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnlatadosPage } from './enlatados.page';

const routes: Routes = [
  {
    path: '',
    component: EnlatadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnlatadosPageRoutingModule {}
