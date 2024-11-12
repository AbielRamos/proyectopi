import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  private validUsers = [
    { username: 'abiel', password: '123456' },
    { username: 'manuel', password: '123456' },
    { username: 'valentin', password: '123456' },
    { username: 'majo', password: '123456' }
  ];

  constructor(private router: Router, private navCtrl: NavController) {}

  login() {
    const user = this.validUsers.find(u => u.username === this.username && u.password === this.password);
    if (user) {
      // Guardar el token de autenticación en localStorage
      localStorage.setItem('token', 'user-token');
      this.navCtrl.navigateRoot('/tabs');
    } else {
      alert('Credenciales incorrectas. Por favor, inténtelo de nuevo.');
    }
  }
}





