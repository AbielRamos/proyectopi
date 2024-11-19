import { Router } from '@angular/router';
import { Producto } from '../producto/product.model';
import { CarritoService } from '../services/carrito.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-limpieza',
  templateUrl: './limpieza.page.html',
  styleUrls: ['./limpieza.page.scss'],
})
export class LimpiezaPage {
  products: Producto[] = [
    { id: 1, nombre: 'Pétalo 4 rollos', precio: 20, image: 'assets/img/Pétalo4rollos.jpg', cantidad: 1 },
    { id: 2, nombre: 'Suavel 4 rollos', precio: 51, image: 'assets/img/Suavel 4 rollos.jpg', cantidad: 1 },
    { id: 3, nombre: 'Salvo Lava Trastes 1.2L', precio: 77, image: 'assets/img/SalvoLavaTrastes1.2L.jpg', cantidad: 1 },
    { id: 4, nombre: 'Roma Jabón en polvo 1kg', precio: 30, image: 'assets/img/RomaJabónenpolvo1kg.jpg', cantidad: 1 },
    { id: 5, nombre: 'Foca Jabón en polvo 1kg', precio: 34, image: 'assets/img/FocaJabónenpolvo1kg.jpg', cantidad: 1 },
    { id: 6, nombre: 'Raid Insecticida 400ml', precio: 79, image: 'assets/img/RaidInsecticida400ml.jpg', cantidad: 1 }
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
