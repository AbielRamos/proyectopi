import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../producto/product.model';
import { CarritoService } from '../services/carrito.service';

@Component({
  selector: 'app-explorar',
  templateUrl: './explorar.page.html',
  styleUrls: ['./explorar.page.scss'],
})
export class ExplorarPage {
  bebidas: Producto[] = [
    { id: 1, nombre: 'Coca-Cola Refresco Sabor Original', precio: 45, image: 'assets/img/coca-cola.jpg' },
    { id: 2, nombre: 'Pepsi', precio: 40, image: 'assets/img/pepsi.jpg' }
  ];

  abarrotes: Producto[] = [
    { id: 3, nombre: 'Pan Bimbo', precio: 30, image: 'assets/img/pan-bimbo.jpg' },
    { id: 4, nombre: 'Harina de Trigo', precio: 25, image: 'assets/img/harina-trigo.jpg' }
  ];

  dulcesYBotanas: Producto[] = [
    { id: 5, nombre: 'Chocolates Hershey\'s', precio: 50, image: 'assets/img/chocolates-hersheys.jpg' },
    { id: 6, nombre: 'Papas Sabritas', precio: 20, image: 'assets/img/papas-sabritas.jpg' }
  ];

  limpieza: Producto[] = [
    { id: 7, nombre: 'Jabón Líquido', precio: 15, image: 'assets/img/jabon-liquido.jpg' },
    { id: 8, nombre: 'Cloro', precio: 12, image: 'assets/img/cloro.jpg' }
  ];

  constructor(private router: Router, private carritoService: CarritoService) {}

  navigateToCarrito() {
    this.router.navigate(['/carrito']);
  }

  addToCart(producto: Producto) {
    this.carritoService.addToCarrito(producto);
    console.log('Producto añadido al carrito', producto);
  }

  scrollToCategory(categoryId: string) {
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

















