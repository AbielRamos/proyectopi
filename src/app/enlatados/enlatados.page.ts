import { Router } from '@angular/router';
import { Producto } from '../producto/product.model';
import { CarritoService } from '../services/carrito.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enlatados',
  templateUrl: './enlatados.page.html',
  styleUrls: ['./enlatados.page.scss'],
})
export class EnlatadosPage {
  products: Producto[] = [
    { id: 1, nombre: 'Atún Dolores Aleta Amarilla en agua 140g', precio: 23, image: 'assets/img/nutrileche.jpg', cantidad: 1 },
    { id: 2, nombre: 'Atún Dolores Aleta Amarilla en agua 295g', precio: 40, image: 'assets/img/alpura_entera.jpg', cantidad: 1 },
    { id: 3, nombre: 'Atún Dolores Aleta Amarilla en aceite 140g', precio: 23.5, image: 'assets/img/la_lechera.jpg', cantidad: 1 },
    { id: 4, nombre: 'Atún Dolores Aleta Amarilla en aceite 295g', precio: 27, image: 'assets/img/lala_entera.jpg', cantidad: 1 },
    { id: 5, nombre: 'Mayonesa McCormick con limón 390g', precio: 41, image: 'assets/img/alpura_deslactosada.jpg', cantidad: 1 },
    { id: 6, nombre: 'Mayonesa McCormick con limón 228g', precio: 32, image: 'assets/img/carnation.jpg', cantidad: 1 },
    { id: 7, nombre: 'Chiles Jalapeños La Costeña en rajas 240g', precio: 15, image: 'assets/img/crema.jpg', cantidad: 1 },
    { id: 8, nombre: 'Chiles Jalapeños La Costeña en rajas 220g', precio: 16, image: 'assets/img/laladeslactosada.jpg', cantidad: 1 },
    { id: 9, nombre: 'Chiles Jalapeños La Costeña enteros 2.8kg', precio: 48, image: 'assets/img/laladeslactosada.jpg', cantidad: 1 },
    { id: 10, nombre: 'Chiles Jalapeños La Costeña en rajas 105g', precio: 11, image: 'assets/img/laladeslactosada.jpg', cantidad: 1 },
    { id: 11, nombre: 'Chiles Jalapeños San Marcos enteros 780g', precio: 31, image: 'assets/img/laladeslactosada.jpg', cantidad: 1 },
    { id: 12, nombre: 'Chiles Jalapeños San Marcos enteros 2.8kg', precio: 69, image: 'assets/img/laladeslactosada.jpg', cantidad: 1 }
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
