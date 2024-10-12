import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Simulación de autenticación
  private isLoggedIn = false; // Cambia esto según tu lógica de autenticación

  constructor() {}

  isAuthenticated(): boolean {
    // Aquí podrías implementar la lógica para verificar la autenticación real
    return this.isLoggedIn; // Devuelve true o false basado en la autenticación
  }

  login() {
    this.isLoggedIn = true; // Método de ejemplo para iniciar sesión
  }

  logout() {
    this.isLoggedIn = false; // Método de ejemplo para cerrar sesión
  }
}


