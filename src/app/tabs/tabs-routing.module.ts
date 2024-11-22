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
        loadChildren: () =>
          import('../explorar/explorar.module').then(
            (m) => m.ExplorarPageModule
          ),
      },
      {
        path: 'historial',
        loadChildren: () =>
          import('../historial/historial.module').then(
            (m) => m.HistorialPageModule
          ),
      },
      {
        path: 'cuenta',
        loadChildren: () =>
          import('../cuenta/cuenta.module').then((m) => m.CuentaPageModule),
      },
      {
        path: '',
        redirectTo: 'explorar', // Redirigir por defecto a la pestaña de explorar
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/explorar', // Asegúrate de redirigir a explorar desde cualquier acceso vacío
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}










