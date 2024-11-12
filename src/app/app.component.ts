import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router, private platform: Platform) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      const isAuthenticated = this.isAuthenticated();
      if (isAuthenticated) {
        this.router.navigate(['/login']); // Redirige a 'Historial' después del login
      } else {
        this.router.navigate(['/historial']); // Redirige al login si no está autenticado
      }
    });
  }

  private isAuthenticated(): boolean {
    // Lógica para verificar si el usuario está autenticado
    // Ejemplo: revisar un token en localStorage
    return !!localStorage.getItem('token');
  }
}
