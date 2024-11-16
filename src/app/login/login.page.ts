// src/app/login/login.page.ts
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private navCtrl: NavController, private apiService: ApiService) {}

  async login() {
    try {
      const response = await this.apiService.login(this.username, this.password).toPromise();
      console.log('Inicio de sesión exitoso:', response);
      // Guardar el token de autenticación en localStorage
      localStorage.setItem('token', response.token);
      this.navCtrl.navigateRoot('/tabs');
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
      alert('Correo o contraseña incorrectos.');
    }
  }
}







