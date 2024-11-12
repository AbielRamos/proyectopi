import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarritoService } from '../services/carrito.service';
import { Pedido } from '../models/pedido.model';

@Component({
  selector: 'app-mi-pedido',
  templateUrl: './mi-pedido.page.html',
  styleUrls: ['./mi-pedido.page.scss'],
})
export class MiPedidoPage implements OnInit {
  pedido: Pedido = { fecha: '', productos: [], total: 0 };
  total: number = 0;

  constructor(private route: ActivatedRoute, private carritoService: CarritoService) {}

  ngOnInit() {
    const fechaHoraSeleccionada: string = this.route.snapshot.paramMap.get('fecha') || '';  // Manejo de valor null
    const pedidoEncontrado = this.carritoService.obtenerCarrito();
    if (pedidoEncontrado.fecha === fechaHoraSeleccionada) {
      this.pedido = pedidoEncontrado;
      this.actualizarTotal();
    }
  }

  actualizarTotal() {
    this.total = this.pedido.productos.reduce((acc, item) => {
      return acc + item.precio * item.cantidad;
    }, 0);
  }
}















