import { Component, OnInit } from '@angular/core';
import { Pedido, Producto } from '../models/pedido.model';
import { CarritoService } from '../services/carrito.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  carrito: Pedido = { fecha: '', productos: [], total: 0 };
  total: number = 0;
  diaSeleccionado: string = ''; // Almacena el día seleccionado
  horaSeleccionada: string = ''; // Almacena la hora seleccionada

  constructor(private carritoService: CarritoService, private router: Router) {}

  ngOnInit() {
    this.carrito = this.carritoService.obtenerCarrito();
    this.actualizarTotal();
  }

  actualizarCantidad(item: Producto, accion: 'incrementar' | 'decrementar') {
    if (accion === 'incrementar') {
      item.cantidad++;
    } else if (accion === 'decrementar' && item.cantidad > 0) {
      item.cantidad--;
    }
    this.carritoService.actualizarTotal();
    this.actualizarTotal();
  }

  actualizarTotal() {
    this.total = this.carritoService.obtenerTotal();
  }

  vaciarCanasta() {
    this.carritoService.vaciarCarrito();
    this.carrito = this.carritoService.obtenerCarrito();
    this.actualizarTotal();
  }

  eliminarItem(item: Producto) {
    const index = this.carrito.productos.indexOf(item);
    if (index > -1) {
      this.carrito.productos.splice(index, 1);
    }
    this.carritoService.actualizarTotal();
    this.actualizarTotal();
  }

  pedir() {
    this.router.navigate(['/calendario']);
  }

  continuar() {
    const productosEnCarrito = this.carrito.productos;

    if (productosEnCarrito.length === 0) {
      alert('Por favor, añade productos al carrito antes de continuar.');
      return;
    }

    if (this.diaSeleccionado && this.horaSeleccionada) {
      const fechaHoraSeleccionada = `${this.diaSeleccionado} ${this.horaSeleccionada}`;
      const nuevoPedido: Pedido = {
        fecha: fechaHoraSeleccionada,
        productos: productosEnCarrito,
        total: this.total,
      };

      this.carritoService.agregarPedido(nuevoPedido);

      // Navegación con parámetro dinámico
      this.router.navigate([`/mi-pedido/${fechaHoraSeleccionada}`]);
    } else {
      alert('Por favor, selecciona un día y una hora');
    }
  }
}

