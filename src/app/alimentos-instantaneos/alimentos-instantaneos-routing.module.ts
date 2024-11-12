import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlimentosInstantaneosPage } from './alimentos-instantaneos.page';

const routes: Routes = [
  {
    path: '',
    component: AlimentosInstantaneosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlimentosInstantaneosPageRoutingModule {}
