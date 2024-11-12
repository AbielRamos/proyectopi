import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'explorar',
        loadChildren: () => import('../explorar/explorar.module').then(m => m.ExplorarPageModule)
      },
      {
        path: 'historial',
        loadChildren: () => import('../historial/historial.module').then(m => m.HistorialPageModule)
      },
      {
        path: 'cuenta',
        loadChildren: () => import('../cuenta/cuenta.module').then(m => m.CuentaPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/explorar',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}




