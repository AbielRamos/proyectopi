import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule) },
  { path: 'tabs', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) },
  { path: 'explorar', loadChildren: () => import('./explorar/explorar.module').then(m => m.ExplorarPageModule) },
  { path: 'historial', loadChildren: () => import('./historial/historial.module').then(m => m.HistorialPageModule) },
  { path: 'cuenta', loadChildren: () => import('./cuenta/cuenta.module').then(m => m.CuentaPageModule) },
  { path: 'mi-pedido/:fecha', loadChildren: () => import('./mi-pedido/mi-pedido.module').then(m => m.MiPedidoPageModule) },
  { path: 'producto', loadChildren: () => import('./producto/producto.module').then(m => m.ProductoPageModule) },
  { path: 'carrito', loadChildren: () => import('./carrito/carrito.module').then(m => m.CarritoPageModule) },
  { path: 'inicio', loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioPageModule) },
  { path: 'lacteos', loadChildren: () => import('./lacteos/lacteos.module').then(m => m.LacteosPageModule) },
  { path: 'botanas', loadChildren: () => import('./botanas/botanas.module').then(m => m.BotanasPageModule) },
  { path: 'galletas', loadChildren: () => import('./galletas/galletas.module').then(m => m.GalletasPageModule) },
  { path: 'alimentos-instantaneos', loadChildren: () => import('./alimentos-instantaneos/alimentos-instantaneos.module').then(m => m.AlimentosInstantaneosPageModule) },
  { path: 'enlatados', loadChildren: () => import('./enlatados/enlatados.module').then(m => m.EnlatadosPageModule) },
  { path: 'calendario', loadChildren: () => import('./calendario/calendario.module').then(m => m.CalendarioPageModule) },
  { path: 'cafe', loadChildren: () => import('./cafe/cafe.module').then(m => m.CafePageModule) },
  { path: 'condimentos', loadChildren: () => import('./condimentos/condimentos.module').then(m => m.CondimentosPageModule) },
  { path: 'limpieza', loadChildren: () => import('./limpieza/limpieza.module').then(m => m.LimpiezaPageModule) },
  { path: 'legumbres', loadChildren: () => import('./legumbres/legumbres.module').then(m => m.LegumbresPageModule) },
  {
    path: 'seguridad',
    loadChildren: () => import('./seguridad/seguridad.module').then(m => m.SeguridadPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}










