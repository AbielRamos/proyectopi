import { Component, OnInit } from '@angular/core';
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
export class ExplorarPage implements OnInit {
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
      products: []
    }
  ];
  filteredCategories: Categoria[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.filteredCategories = this.categories;
  }

  filterList(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    if (searchTerm) {
      this.filteredCategories = this.categories.filter(category => {
        return category.name.toLowerCase().includes(searchTerm);
      });
    } else {
      this.filteredCategories = this.categories;
    }
  }

  navigateToCarrito() {
    this.router.navigate(['/carrito']);
  }

  navigateToCategory(category: Categoria) {
    const categoryName = category.name.toLowerCase();
    switch (categoryName) {
      case 'lácteos y derivados':
        this.router.navigate(['/lacteos']);
        break;
      case 'botanas':
        this.router.navigate(['/botanas']);
        break;
      case 'galletas':
        this.router.navigate(['/galletas']);
        break;
      case 'alimentos instantáneos':
        this.router.navigate(['/alimentos-instantaneos']);
        break;
      case 'enlatados y conservas':
        this.router.navigate(['/enlatados']);
        break;
      case 'productos de limpieza y aseo':
        this.router.navigate(['/limpieza']);
        break;
      case 'café':
        this.router.navigate(['/cafe']);
        break;
      case 'condimentos y salsas':
        this.router.navigate(['/condimentos']);
        break;
      case 'arroz, frijoles y legumbres':
        this.router.navigate(['/legumbres']);
        break;
      default:
        console.log('Categoría no encontrada');
    }
  }
}




















