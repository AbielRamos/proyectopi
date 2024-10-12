import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  title = 'Sistema de Gestión';
  
  constructor(private router: Router) {}

  shouldShowMenu(): boolean {
    // Aquí puedes definir la lógica para mostrar u ocultar el menú
    const currentRoute = this.router.url;
    return currentRoute !== '/login'; // Por ejemplo, no mostrar menú en la ruta de login
  }

  logout() {
    // Implementa la lógica de cierre de sesión aquí
    console.log('Cierre de sesión');
  }
}
