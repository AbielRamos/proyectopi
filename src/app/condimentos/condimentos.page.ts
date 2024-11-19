import { Router } from '@angular/router';
import { Producto } from '../producto/product.model';
import { CarritoService } from '../services/carrito.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condimentos',
  templateUrl: './condimentos.page.html',
  styleUrls: ['./condimentos.page.scss'],
})
export class CondimentosPage {
  products: Producto[] = [
    { id: 1, nombre: 'Mermelada McCormick Fresa 270g', precio: 32, image: 'assets/img/MermeladaMcCormickFresa270g.jpg', cantidad: 1 },
    { id: 2, nombre: 'Kétchup 397g', precio: 28, image: 'assets/img/Kétchup397g.jpg', cantidad: 1 },
    { id: 3, nombre: 'Catsup Clemente 970g', precio: 35, image: 'CatsupClemente970g.jpg', cantidad: 1 },
    { id: 4, nombre: 'Catsup Clemente 680g', precio: 27, image: 'assets/img/CatsupClemente680g.jpg', cantidad: 1 },
    { id: 5, nombre: 'Mayonesa McCormick con limón 390g', precio: 48, image: 'assets/img/MayonesaMcCormickconlimón390g.jpg', cantidad: 1 },
    { id: 6, nombre: 'Mayonesa McCormick con limón 228g', precio: 32, image: 'assets/img/MayonesaMcCormickconlimón228g.jpg', cantidad: 1 },
    { id: 7, nombre: 'Chiles Jalapeños La Costeña en rajas 240g', precio: 15, image: 'assets/img/ChilesJalapeñosLaCosteñaenrajas240g.jpg', cantidad: 1 },
    { id: 8, nombre: 'Chiles Jalapeños La Costeña en rajas 220g', precio: 16, image: 'assets/img/ChilesJalapeñosLaCosteñaenrajas220g.jpg', cantidad: 1 },
    { id: 9, nombre: 'Chiles Jalapeños La Costeña enteros 2.8kg', precio: 48, image: 'assets/img/ChilesJalapeñosLaCosteñaenteros2.8kg.jpg', cantidad: 1 },
    { id: 10, nombre: 'Chiles Jalapeños La Costeña en rajas 105g', precio: 11, image: 'assets/img/ChilesJalapeñosLaCosteñaenrajas105g.jpg', cantidad: 1 },
    { id: 11, nombre: 'Chiles Jalapeños San Marcos enteros 780g', precio: 31, image: 'assets/img/ChilesJalapeñosSanMarcosenteros780g.jpg', cantidad: 1 },
    { id: 12, nombre: 'Chiles Jalapeños San Marcos enteros 2.8kg', precio: 69, image: 'assets/img/ChilesJalapeñosSanMarcosenteros2.8kg.jpg', cantidad: 1 }
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


