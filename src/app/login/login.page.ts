import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  // Define un array de usuarios válidos
  private validUsers = [
    { username: 'abiel', password: '123456' },
    { username: 'manuel', password: '123456' },
    { username: 'valentin', password: '123456' },
    { username: 'majo', password: '123456' }
  ];

  constructor(private router: Router) {}

  login() {
    // Validar las credenciales
    const user = this.validUsers.find(
      (u) => u.username === this.username && u.password === this.password
    );

    if (user) {
      // Si las credenciales son válidas, navegar a la página de inicio
      this.router.navigate(['/explorar']); // Cambia esto a la ruta de inicio deseada
    } else {
      // Si las credenciales no son válidas, mostrar un mensaje de error
      console.error('Credenciales inválidas');
      alert('Credenciales inválidas. Inténtalo de nuevo.');
    }
  }
}

