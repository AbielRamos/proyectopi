import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-seguridad',
  templateUrl: './seguridad.page.html',
  styleUrls: ['./seguridad.page.scss'],
})
export class SeguridadPage {
  nuevaContrasena: string = '';
  confirmarContrasena: string = '';
  usuario: any;

  constructor(private navCtrl: NavController, private userService: UserService) {}

  ngOnInit() {
    // Obtener los datos del usuario desde el servicio compartido
    this.usuario = this.userService.getUsuario();
  }

  cambiarContrasena() {
    if (!this.nuevaContrasena || !this.confirmarContrasena || this.nuevaContrasena.length < 6) {
      alert('Por favor, completa todos los campos. La nueva contraseña debe tener al menos 6 caracteres.');
      return;
    }

    if (this.nuevaContrasena !== this.confirmarContrasena) {
      alert('Las contraseñas no coinciden. Por favor, inténtalo de nuevo.');
      return;
    }

    // Actualizar la contraseña del usuario
    this.usuario.password = this.nuevaContrasena;
    this.userService.setUsuario(this.usuario);
    console.log('Contraseña cambiada:', this.usuario);

    alert('Contraseña cambiada exitosamente.');
    this.navCtrl.navigateForward('/cuenta');
  }
}

