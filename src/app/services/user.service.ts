import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usuario: any;

  constructor(private apiService: ApiService) {}

  async cargarUsuario() {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.usuario = await this.apiService.getUsuario(userId).toPromise();
    }
  }

  getUsuario() {
    return this.usuario;
  }

  setUsuario(usuario: any) {
    this.usuario = usuario;
  }

  async actualizarUsuario(datos: any) {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.usuario = await this.apiService.actualizarUsuario(userId, datos).toPromise();
    }
  }
}

