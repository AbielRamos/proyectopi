import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../producto/product.model';
import { CarritoService } from '../services/carrito.service';
import { ToastController } from '@ionic/angular';

interface Pedido {
  fecha: string;
  hora: string;
  productos: Producto[];
  total: number;
}

@Component({
  selector: 'app-mi-pedido',
  templateUrl: './mi-pedido.page.html',
  styleUrls: ['./mi-pedido.page.scss'],
})
export class MiPedidoPage {
  horaPedido: string = ''; // Hora programada para el pedido
  total: number = 0;
  productosPedido: Producto[] = [];

  constructor(
    private router: Router,
    private carritoService: CarritoService,
    private toastController: ToastController
  ) {
    // Obtener el pedido desde el estado de la navegación con notación de corchetes
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      const pedido = navigation.extras.state['pedido']; // Aquí recibimos el 'pedido'
      if (pedido) {
        this.productosPedido = pedido.productos;
        this.total = pedido.total;
      }
    }
  
    // Redirigir si no hay productos en el pedido
    if (this.productosPedido.length === 0) {
      this.router.navigate(['/carrito']);
    }
  }

  calcularTotal() {
    // Calcular el total del pedido
    this.total = this.productosPedido.reduce(
      (acc, producto) => acc + (producto.precio * (producto.cantidad || 1)),
      0
    );
  }

  async mostrarMensaje(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'top',
    });
    toast.present();
  }

  programarPedido() {
    if (this.productosPedido.length === 0) {
      this.mostrarMensaje('No puedes programar un pedido vacío.');
      return;
    }

    const pedidoProgramado: Pedido = {
      fecha: new Date().toISOString(), // Se puede formatear según tus necesidades
      hora: this.horaPedido,
      productos: this.productosPedido,
      total: this.total,
    };

    // Almacenar el pedido en el historial
    const historial = JSON.parse(localStorage.getItem('historial') || '[]');
    historial.push(pedidoProgramado);
    localStorage.setItem('historial', JSON.stringify(historial));

    this.limpiarCarrito();

    // Navegar a la página de historial
    this.router.navigate(['/historial']);
  }

  limpiarCarrito() {
    // Limpiar el carrito y los productos
    this.carritoService.vaciarCarrito();
    this.productosPedido = [];
    this.total = 0;
  }
}

















