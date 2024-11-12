import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LacteosPage } from './lacteos.page';

const routes: Routes = [
  {
    path: '',
    component: LacteosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LacteosPageRoutingModule {}
