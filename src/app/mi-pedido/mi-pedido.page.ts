import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from '../services/carrito.service';
import { Pedido } from '../models/pedido.model';

@Component({
  selector: 'app-mi-pedido',
  templateUrl: './mi-pedido.page.html',
  styleUrls: ['./mi-pedido.page.scss'],
})
export class MiPedidoPage implements OnInit {
  pedido: Pedido | null = null;

  constructor(private carritoService: CarritoService, private router: Router) {}

  ngOnInit() {
    // Obtener el pedido actual
    this.pedido = this.carritoService.obtenerCarrito();

    if (!this.pedido || this.pedido.productos.length === 0) {
      alert('No hay productos en el pedido.');
      this.router.navigate(['/tabs/carrito']); // Redirige al carrito si no hay pedido
    }
  }

  aceptar() {
    if (this.pedido && this.pedido.productos.length > 0) {
      // Agregar el pedido al historial con un folio generado automáticamente
      this.carritoService.addPedido(this.pedido);

      // Vaciar el carrito después de confirmar
      this.carritoService.vaciarCarrito();

      // Redirigir al historial
      this.router.navigate(['/tabs/historial']);
    } else {
      alert('No hay un pedido válido para confirmar.');
    }
  }
}
















