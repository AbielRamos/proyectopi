import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CondimentosPage } from './condimentos.page';

const routes: Routes = [
  {
    path: '',
    component: CondimentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CondimentosPageRoutingModule {}
