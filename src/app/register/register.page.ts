import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private navCtrl: NavController) {}

  register() {
    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden. Por favor, inténtalo de nuevo.');
      return;
    }

    // Lógica para registrar al usuario (p. ej., guardar en base de datos)
    alert('Usuario registrado exitosamente. Ahora puedes iniciar sesión.');
    this.navCtrl.navigateRoot('/login');
  }
}


