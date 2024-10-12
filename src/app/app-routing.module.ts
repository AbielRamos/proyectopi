import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'explorar', pathMatch: 'full' }, // Cambia 'login' por 'explorar' o la página que quieras mostrar
  { path: 'explorar', loadChildren: () => import('./explorar/explorar.module').then(m => m.ExplorarPageModule) }, // Puedes mantener o quitar el AuthGuard aquí
  { path: 'cuenta', loadChildren: () => import('./cuenta/cuenta.module').then(m => m.CuentaPageModule) }, // Quitar el AuthGuard si no lo necesitas
  { path: 'historial', loadChildren: () => import('./historial/historial.module').then(m => m.HistorialPageModule) }, // Quitar el AuthGuard si no lo necesitas
  { path: 'mi-pedido', loadChildren: () => import('./mi-pedido/mi-pedido.module').then(m => m.MiPedidoPageModule) }, // Quitar el AuthGuard si no lo necesitas
  { path: 'producto', loadChildren: () => import('./producto/producto.module').then(m => m.ProductoPageModule) },
  { path: 'carrito', loadChildren: () => import('./carrito/carrito.module').then(m => m.CarritoPageModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}





