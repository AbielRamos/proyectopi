import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = environment.apiUrl; // Asegúrate de que esta URL esté configurada en tu archivo de entorno

  constructor(private http: HttpClient) {}

  login(correo: string, contrasena: string): Observable<any> {
    const url = `${this.baseUrl}/api/cliente/login`;
    return this.http.post(url, { correo, contrasena });
  }

  registro(
    nombre: string,
    apellidos: string,
    correo: string,
    contrasena: string,
    direccion: string,
    telefono: string
  ): Observable<any> {
    const url = `${this.baseUrl}/api/cliente/registro`;
    return this.http.post(url, {
      nombre,
      apellidos,
      correo,
      contrasena,
      direccion,
      telefono,
    });
  }

  getUsuario(id: string): Observable<any> {
    const url = `${this.baseUrl}/api/cliente/${id}`;
    return this.http.get(url);
  }

  actualizarUsuario(id: string, datos: any): Observable<any> {
    const url = `${this.baseUrl}/api/cliente/${id}`;
    return this.http.put(url, datos);
  }
}
