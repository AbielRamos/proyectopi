import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../services/carrito.service';
import { Pedido } from '../models/pedido.model';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {
  pedidos: Pedido[] = [];

  constructor(private carritoService: CarritoService) {}

  ngOnInit() {
    // Obtener historial y ordenarlo por fecha más reciente
    this.pedidos = this.carritoService.obtenerHistorial().reverse();
  }

  verDetallesPedido(pedido: Pedido) {
    // Opcional: Redirigir a otra página con más detalles del pedido
    console.log('Pedido seleccionado:', pedido);
  }
}






