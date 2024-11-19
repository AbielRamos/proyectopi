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
    this.pedido = this.carritoService.obtenerCarrito();
  }

  aceptar() {
    if (this.pedido) {
      this.carritoService.agregarAlHistorial(this.pedido);
      this.carritoService.vaciarCarrito();
      this.router.navigate(['/historial']);
    }
  }
}
















