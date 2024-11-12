import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../producto/product.model';

interface Categoria {
  name: string;
  image: string;
  products: Producto[];
}

@Component({
  selector: 'app-explorar',
  templateUrl: './explorar.page.html',
  styleUrls: ['./explorar.page.scss'],
})
export class ExplorarPage {
  categories: Categoria[] = [
    {
      name: 'Botanas',
      image: 'assets/images/botanas.jpg',
      products: []
    },
    {
      name: 'Galletas',
      image: 'assets/images/galletas.jpg',
      products: []
    },
    {
      name: 'Alimentos Instantáneos',
      image: 'assets/images/alimentos_instantaneos.jpg',
      products: []
    },
    {
      name: 'Enlatados y Conservas',
      image: 'assets/images/enlatados.jpg',
      products: []
    },
    {
      name: 'Lácteos y Derivados',
      image: 'assets/images/lacteos.jpg',
      products: []
    },
    {
      name: 'Café',
      image: 'assets/images/cafe.jpg',
      products: []
    },
    {
      name: 'Condimentos y Salsas',
      image: 'assets/images/condimentos.jpg',
      products: []
    },
    {
      name: 'Arroz, Frijoles y Legumbres',
      image: 'assets/images/arroz_frijol.jpg',
      products: []
    },
    {
      name: 'Productos de Limpieza y Aseo',
      image: 'assets/images/limpieza_personal.jpg',
      products: [
]
    }
  ];

  constructor(private router: Router) {}

  // Función para navegar al carrito
  navigateToCarrito() {
    this.router.navigate(['/carrito']);
  }

  // Función para navegar a una página específica de categoría
  navigateToCategory(category: Categoria) {
    switch (category.name) {
      case 'Lácteos y Derivados':
        this.router.navigate(['/lacteos']);
        break;
      case 'Botanas':
        this.router.navigate(['/botanas']);
        break;
      case 'Galletas':
        this.router.navigate(['/galletas']);
        break;
      case 'Alimentos Instantáneos':
        this.router.navigate(['/alimentos-instantaneos']);
        break;
      case 'Enlatados y Conservas':
        this.router.navigate(['/enlatados']);
        break;
      case 'Productos de Limpieza y Aseo':
        this.router.navigate(['/limpieza']);
        break;
      // Agrega más casos para cada categoría según sea necesario
      default:
        console.log('Categoría no encontrada');
    }
  }
}




















