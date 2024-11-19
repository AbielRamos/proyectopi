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
    { id: 1, nombre: 'Arroz Shettino 907g', precio: 51, image: 'assets/img/ArrozShettino907g.jpg', cantidad: 1 },
    { id: 2, nombre: 'Frijol negro Michigan Bueno', precio: 51, image: 'assets/img/FrijolnegroMichiganBueno.jpg', cantidad: 1 },
    { id: 3, nombre: 'Frijol bayo Bueno 1kg', precio: 20, image: 'assets/img/FrijolbayoBueno1kg.jpg', cantidad: 1 },
    { id: 4, nombre: 'Frijol Querétaro Shettino 907g', precio: 20, image: 'assets/img/FrijolQuerétaroShettino907g.jpg', cantidad: 1 },
    { id: 5, nombre: 'Lenteja Shettino 500g', precio: 17, image: 'assets/img/LentejaShettino500g.jpg', cantidad: 1 }
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

