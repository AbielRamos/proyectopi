import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { GoogleAuthService } from '../services/google.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private navCtrl: NavController, private apiService: ApiService, private googleAuthService: GoogleAuthService) {}

  async login() {
    try {
      const response = await this.apiService.login(this.username, this.password).toPromise();
      console.log('Inicio de sesión exitoso:', response);
      // Guardar el token de autenticación y el ID del usuario en localStorage
      localStorage.setItem('token', response.token);
      localStorage.setItem('userId', response.cliente.id);
      this.navCtrl.navigateRoot('/tabs');
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
      alert('Correo o contraseña incorrectos.');
    }
  }

  forgotPassword() {
    alert('Función de olvido de contraseña no implementada.');
  }

  async loginWithGoogle() {
    try {
      const userData = await this.googleAuthService.signInWithGoogle();
      console.log('Inicio de sesión con Google exitoso:', userData);
      // Guarda el token en el localStorage o en el backend
      localStorage.setItem('google_token', userData.token);
      // Navega a otra página después del inicio de sesión exitoso
      this.router.navigate(['/tabs']);
    } catch (error) {
      console.error('Error al intentar iniciar sesión con Google:', error);
      alert('Error al intentar iniciar sesión con Google');
    }
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
