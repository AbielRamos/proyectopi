import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../producto/product.model';
import { CarritoService } from '../services/carrito.service';

@Component({
  selector: 'app-lacteos',
  templateUrl: './lacteos.page.html',
  styleUrls: ['./lacteos.page.scss'],
})
export class LacteosPage {
  products: Producto[] = [
    { id: 1, nombre: 'NutriLeche entera 1L', precio: 25, image: 'assets/img/nutrileche.jpg', cantidad: 1 },
    { id: 2, nombre: 'Alpura leche entera 1L', precio: 25, image: 'assets/img/alpura_entera.jpg', cantidad: 1 },
    { id: 3, nombre: 'La lechera 375g', precio: 32, image: 'assets/img/la_lechera.jpg', cantidad: 1 },
    { id: 4, nombre: 'Lala entera 1L', precio: 25, image: 'assets/img/lala_entera.jpg', cantidad: 1 },
    { id: 5, nombre: 'Alpura deslactosada 1L', precio: 27, image: 'assets/img/alpura_deslactosada.jpg', cantidad: 1 },
    { id: 6, nombre: 'Leche evaporada Carnation 360g', precio: 24, image: 'assets/img/carnation.jpg', cantidad: 1 },
    { id: 7, nombre: 'Media crema Lala 240ml', precio: 17.5, image: 'assets/img/crema.jpg', cantidad: 1 },
    { id: 8, nombre: 'Lala deslactosada 1L', precio: 27, image: 'assets/img/laladeslactosada.jpg', cantidad: 1 }
  ];

  filteredProducts: Producto[] = [...this.products];

  constructor(private router: Router, private carritoService: CarritoService) {}

  filterProducts(event: any) {
    const query = event.target.value.toLowerCase();
    if (query && query.trim() !== '') {
      this.filteredProducts = this.products.filter((product: Producto) =>
        product.nombre.toLowerCase().includes(query)
      );
    } else {
      this.filteredProducts = [...this.products];
    }
  }

  addToCart(product: Producto) {
    this.carritoService.addToCarrito(product);
    console.log(`Producto agregado al carrito: ${product.nombre}`);
  }

  navigateToCarrito() {
    this.router.navigate(['/carrito']);
  }
}
