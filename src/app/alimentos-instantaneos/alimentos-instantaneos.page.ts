import { Router } from '@angular/router';
import { Producto } from '../producto/product.model';
import { CarritoService } from '../services/carrito.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alimentos-instantaneos',
  templateUrl: './alimentos-instantaneos.page.html',
  styleUrls: ['./alimentos-instantaneos.page.scss'],
})

export class AlimentosInstantaneosPage {
  products: Producto[] = [
    { id: 1, nombre: 'Riko Pollo en cubo 20pz', precio: 30, image: 'assets/img/nutrileche.jpg', cantidad: 1 },
    { id: 2, nombre: 'Knorr Caldo de Pollo 8 cubos 10.5g', precio: 22, image: 'assets/img/alpura_entera.jpg', cantidad: 1 },
    { id: 3, nombre: 'Riko Pollo en polvo 330g', precio: 29.5, image: 'assets/img/la_lechera.jpg', cantidad: 1 },
    { id: 4, nombre: 'Knorr Tomate 10 cubos 11g', precio: 15, image: 'assets/img/lala_entera.jpg', cantidad: 1 },
    { id: 5, nombre: 'Marucha Instant Lunch 64g', precio: 17, image: 'assets/img/alpura_deslactosada.jpg', cantidad: 1 },
    { id: 6, nombre: 'Chips Jalapeño 52g', precio: 13.5, image: 'assets/img/carnation.jpg', cantidad: 1 }
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
