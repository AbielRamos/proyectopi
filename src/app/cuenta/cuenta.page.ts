import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage {
  usuario = {
    nombres: '',
    apellidos: '',
    numeroIdentidad: '',
    email: '',
    celular: '',
    sexo: ''
  };

  constructor(private router: Router, private navCtrl: NavController) {}

  actualizarPerfil() {
    // Lógica para actualizar el perfil del usuario
    alert('Perfil actualizado.');
  }

  cerrarSesion() {
    // Lógica para cerrar sesión
    localStorage.removeItem('token');
    this.navCtrl.navigateRoot('/login');
    alert('Has cerrado sesión.');
  }
  navegarSeguridad() {
     this.navCtrl.navigateForward('/seguridad'); }
}
