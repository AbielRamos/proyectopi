import { Router } from '@angular/router';
import { Producto } from '../producto/product.model';
import { CarritoService } from '../services/carrito.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.page.html',
  styleUrls: ['./cafe.page.scss'],
})
export class CafePage {
  products: Producto[] = [
    { id: 1, nombre: 'Nescafé Clásico 200g', precio: 118, image: 'assets/img/NescaféClásico200g.jpg', cantidad: 1 },
    { id: 2, nombre: 'Nescafé Decaf 170g', precio: 119, image: 'assets/img/NescaféDecaf170g.jpg', cantidad: 1 },
    { id: 3, nombre: 'Nescafé Clásico 120g', precio: 73, image: 'assets/img/NescaféClásico120.jpg', cantidad: 1 },
    { id: 4, nombre: 'Café Córdoba 250g', precio: 70, image: 'assets/img/CaféCórdoba250g.jpg', cantidad: 1 },
    { id: 5, nombre: 'Café Córdoba 500g', precio: 110, image: 'assets/img/CaféCórdoba500g.jpg', cantidad: 1 }
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
