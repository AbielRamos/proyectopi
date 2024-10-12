import { Injectable } from '@angular/core';
import { Producto } from '../producto/product.model';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  carrito: { fecha: string, productos: Producto[] }[] = [];

  constructor() { }

  // Añadir producto al carrito
  addToCarrito(producto: Producto) {
    const hoy = new Date().toLocaleDateString(); // Obtener la fecha de hoy como cadena

    // Buscar si hay un pedido en la fecha actual
    let pedidoDelDia = this.carrito.find(p => p.fecha === hoy);

    // Si ya hay un pedido para el día actual
    if (pedidoDelDia) {
      // Verificar si el producto ya está en el carrito
      const productoExistente = pedidoDelDia.productos.find(p => p.nombre === producto.nombre);

      if (productoExistente) {
        productoExistente.cantidad! += 1;  // Si ya está, incrementar la cantidad
      } else {
        pedidoDelDia.productos.push({ ...producto, cantidad: 1 });  // Si no está, añadir al array
      }
    } else {
      // Si no hay un pedido para hoy, crear uno nuevo
      this.carrito.push({
        fecha: hoy,
        productos: [{ ...producto, cantidad: 1 }]
      });
    }
  }

  // Obtener el carrito
  getCarrito() {
    return this.carrito;
  }

  // Vaciar carrito
  vaciarCarrito() {
    this.carrito = [];
  }
}


