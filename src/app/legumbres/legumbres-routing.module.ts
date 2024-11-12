import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LegumbresPage } from './legumbres.page';

const routes: Routes = [
  {
    path: '',
    component: LegumbresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LegumbresPageRoutingModule {}
