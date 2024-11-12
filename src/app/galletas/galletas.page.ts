import { Router } from '@angular/router';
import { Producto } from '../producto/product.model';
import { CarritoService } from '../services/carrito.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galletas',
  templateUrl: './galletas.page.html',
  styleUrls: ['./galletas.page.scss'],
})

export class GalletasPage {
  products: Producto[] = [
    { id: 1, nombre: 'Marías Clásicas 177g', precio: 18, image: 'assets/img/nutrileche.jpg', cantidad: 1 },
    { id: 2, nombre: 'Emperador 109g', precio: 20, image: 'assets/img/alpura_entera.jpg', cantidad: 1 },
    { id: 3, nombre: 'Chokis Clásicas', precio: 20, image: 'assets/img/la_lechera.jpg', cantidad: 1 },
    { id: 4, nombre: 'Chokis Rellenas', precio: 20, image: 'assets/img/lala_entera.jpg', cantidad: 1 },
    { id: 5, nombre: 'Crakets 95g', precio: 20, image: 'assets/img/lala_entera.jpg', cantidad: 1 }
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

