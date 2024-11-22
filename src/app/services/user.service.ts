import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usuario: any = {};

  setUsuario(data: any) {
    this.usuario = { ...data };
  }

  getUsuario() {
    return this.usuario;
  }
}

