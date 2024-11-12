import { Injectable } from '@angular/core';
import { Producto } from '../producto/product.model';
import { Pedido } from '../models/pedido.model';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private carrito: Pedido[] = [];

  constructor() {}

  addToCarrito(producto: Producto) {
    const fechaHoy = new Date().toISOString().split('T')[0];
    let pedidoActual = this.carrito.find(pedido => pedido.fecha === fechaHoy);

    if (!pedidoActual) {
      pedidoActual = { fecha: fechaHoy, productos: [], total: 0 };
      this.carrito.push(pedidoActual);
    }

    const itemExistente = pedidoActual.productos.find(item => item.nombre === producto.nombre);

    if (itemExistente) {
      itemExistente.cantidad += producto.cantidad || 1;
    } else {
      pedidoActual.productos.push({ ...producto, cantidad: producto.cantidad || 1 });
    }

    this.actualizarTotal();
  }

  obtenerCarrito(): Pedido {
    return this.carrito.length > 0 ? this.carrito[0] : { fecha: '', productos: [], total: 0 };
  }

  vaciarCarrito() {
    this.carrito = [];
  }

  actualizarTotal() {
    this.carrito.forEach(pedido => {
      pedido.total = pedido.productos.reduce((acc, item) => {
        return acc + item.precio * item.cantidad;
      }, 0);
    });
  }

  obtenerTotal(): number {
    return this.carrito.length > 0 ? this.carrito[0].total : 0;
  }

  agregarPedido(pedido: Pedido) {
    const existingPedido = this.carrito.find(p => p.fecha === pedido.fecha);
    if (!existingPedido) {
      this.carrito.push(pedido);
    } else {
      existingPedido.productos = pedido.productos;
      existingPedido.total = pedido.total;
    }
  }
}







