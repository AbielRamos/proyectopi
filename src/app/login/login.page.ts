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
      localStorage.setItem('token', 'user-token');
      this.navCtrl.navigateRoot('/tabs/explorar');
    } else {
      alert('Credenciales incorrectas. Por favor, inténtelo de nuevo.');
    }
  }

  forgotPassword() {
    alert('Función de olvido de contraseña no implementada.');
  }

  loginWithGoogle() {
    alert('Función de inicio de sesión con Google no implementada.');
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}








