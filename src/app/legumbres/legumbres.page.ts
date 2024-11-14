import { Router } from '@angular/router';
import { Producto } from '../producto/product.model';
import { CarritoService } from '../services/carrito.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-legumbres',
  templateUrl: './legumbres.page.html',
  styleUrls: ['./legumbres.page.scss'],
})
export class LegumbresPage {
  products: Producto[] = [
    { id: 1, nombre: 'Takis Fuego 240g', precio: 51, image: 'assets/img/nutrileche.jpg', cantidad: 1 },
    { id: 2, nombre: 'Takis Fajita 240g', precio: 51, image: 'assets/img/alpura_entera.jpg', cantidad: 1 },
    { id: 3, nombre: 'Takis Fuego 94g', precio: 20, image: 'assets/img/la_lechera.jpg', cantidad: 1 },
    { id: 4, nombre: 'Takis Bluego 94g', precio: 20, image: 'assets/img/lala_entera.jpg', cantidad: 1 },
    { id: 5, nombre: 'Chips fuego 55g', precio: 17, image: 'assets/img/alpura_deslactosada.jpg', cantidad: 1 },
    { id: 6, nombre: 'Chips Jalapeño 52g', precio: 20, image: 'assets/img/carnation.jpg', cantidad: 1 },
    { id: 7, nombre: 'Chips sal 62g', precio: 20, image: 'assets/img/crema.jpg', cantidad: 1 },
    { id: 8, nombre: 'Big Mix fuego 75g', precio: 17, image: 'assets/img/laladeslactosada.jpg', cantidad: 1 },
    { id: 9, nombre: 'Big Mix queso 75g', precio: 17, image: 'assets/img/laladeslactosada.jpg', cantidad: 1 },
    { id: 10, nombre: 'Sabritas sal 42g', precio: 20, image: 'assets/img/laladeslactosada.jpg', cantidad: 1 },
    { id: 11, nombre: 'Sabritas adobadas 42g', precio: 20, image: 'assets/img/laladeslactosada.jpg', cantidad: 1 },
    { id: 12, nombre: 'Rufles queso 52g', precio: 20, image: 'assets/img/laladeslactosada.jpg', cantidad: 1 },
    { id: 13, nombre: 'Doritos Nacho 61g', precio: 20, image: 'assets/img/laladeslactosada.jpg', cantidad: 1 },
    { id: 14, nombre: 'Doritos Diablo 61g', precio: 20, image: 'assets/img/laladeslactosada.jpg', cantidad: 1 },
    { id: 15, nombre: 'Paquetaxo botanero 70g', precio: 18, image: 'assets/img/laladeslactosada.jpg', cantidad: 1 },
    { id: 16, nombre: 'Paquetaxo extra FH 70g', precio: 18, image: 'assets/img/laladeslactosada.jpg', cantidad: 1 }
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

