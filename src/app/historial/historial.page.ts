import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from '../services/carrito.service';
import { Pedido } from '../models/pedido.model';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage {
  pedidos: Pedido[] = [];

  constructor(private router: Router, private carritoService: CarritoService) {
    const carrito = this.carritoService.obtenerCarrito();
    this.pedidos = carrito.productos.length > 0 ? [carrito] : [];
  }

  verDetallesPedido(pedido: Pedido) {
    this.router.navigate(['/mi-pedido', pedido.fecha]);
  }
}





