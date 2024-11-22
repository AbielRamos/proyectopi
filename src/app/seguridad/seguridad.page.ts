import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-seguridad',
  templateUrl: './seguridad.page.html',
  styleUrls: ['./seguridad.page.scss'],
})
export class SeguridadPage {
  contrasenaActual: string = '';
  nuevaContrasena: string = '';
  confirmarNuevaContrasena: string = '';
  usuario: any;

  constructor(private navCtrl: NavController, private userService: UserService) {}

  ngOnInit() {
    // Obtener los datos del usuario desde el servicio compartido
    this.usuario = this.userService.getUsuario();
  }

  cambiarContrasena() {
    if (this.contrasenaActual !== this.usuario.password) {
      alert('La contraseña actual no es correcta.');
      return;
    }

    if (this.nuevaContrasena !== this.confirmarNuevaContrasena) {
      alert('Las nuevas contraseñas no coinciden. Por favor, inténtalo de nuevo.');
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
