import { Component } from '@angular/core';
import { CarritoService } from '../services/carrito.service';
import { Producto } from '../producto/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage {
  carrito: { fecha: string; productos: Producto[] }[] = [];
  subtotal = 0;
  total = 0;
  ultimoProducto: string = ''; // Nombre del último producto añadido
  cantidadUltimoProducto: number = 0; // Cantidad acumulada del último producto

  constructor(private carritoService: CarritoService, private router: Router) {
    this.carrito = this.carritoService.getCarrito();
    this.calcularTotal(); // Calcular el total acumulado
  }

  // Calcular el total del carrito
  calcularTotal() {
    this.total = 0;
    this.carrito.forEach(pedido => {
      pedido.productos.forEach(producto => {
        this.total += producto.precio * (producto.cantidad || 0); // Asegúrate de que la cantidad no sea undefined
      });
    });
  }

  // Actualizar cantidad de productos
  actualizarCantidad(producto: Producto, accion: 'incrementar' | 'decrementar') {
    if (accion === 'incrementar') {
      producto.cantidad = (producto.cantidad || 0) + 1; // Manejar el caso donde cantidad podría ser undefined
    } else if (accion === 'decrementar' && (producto.cantidad || 0) > 1) {
      producto.cantidad = (producto.cantidad || 0) - 1;
    }
    this.calcularTotal();

    // Actualizar el nombre y la cantidad del último producto añadido
    this.ultimoProducto = producto.nombre;
    this.cantidadUltimoProducto = producto.cantidad || 0;
  }

  // Eliminar un producto del carrito
  eliminarItem(producto: Producto) {
    this.carrito.forEach(pedido => {
      pedido.productos = pedido.productos.filter(p => p.nombre !== producto.nombre);
    });
    this.carrito = this.carrito.filter(pedido => pedido.productos.length > 0); // Eliminar pedido si está vacío
    this.calcularTotal();
  }

  // Pedir los productos
  pedir() {
    // Crear un objeto de pedido con la fecha actual, productos del carrito, y el total calculado
    const pedido = {
      fecha: new Date().toISOString(),
      productos: this.carrito.reduce<Producto[]>((acc, p) => acc.concat(p.productos), []), // Especifica el tipo de acumulador
      total: this.total,
    };

    // Navegar a la página "Mi Pedido" después de procesar el pedido
    this.router.navigate(['/mi-pedido'], { state: { pedido: pedido } });

    // Vaciar el carrito después de hacer el pedido
    this.vaciarCanasta();
  }

  // Vaciar el carrito
  vaciarCanasta() {
    this.carritoService.vaciarCarrito();
    this.carrito = [];
    this.total = 0;
  }
}






