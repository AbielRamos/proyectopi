// src/app/services/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = environment.apiUrl; // Asegúrate de que esta URL esté configurada en tu archivo de entorno

  constructor(private http: HttpClient) {}

  login(correo: string, contrasena: string): Observable<any> {
    const url = `${this.baseUrl}/login`;
    return this.http.post(url, { correo, contrasena });
  }

  registro(nombre: string, apellidos: string, correo: string, contrasena: string): Observable<any> {
    const url = `${this.baseUrl}/registro`;
    return this.http.post(url, { nombre, apellidos, correo, contrasena });
  }
}


