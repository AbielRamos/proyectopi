import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { ChangeDetectorRef } from '@angular/core'; // Importar ChangeDetectorRef
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {
  usuario: any; // Información del usuario

  constructor(
    private navCtrl: NavController,
    private userService: UserService,
    private toastController: ToastController,
    private cdr: ChangeDetectorRef // Inyectar ChangeDetectorRef
  ) {}

  async ngOnInit() {
    // Cargar los datos del usuario desde el servicio
    await this.userService.cargarUsuario();
    this.usuario = this.userService.getUsuario();

    if (!this.usuario || Object.keys(this.usuario).length === 0) {
      console.warn('No hay datos del usuario. Redirigiendo al inicio de sesión.');
      alert('No hay datos del usuario. Por favor, inicia sesión nuevamente.');
      this.navCtrl.navigateRoot('/login');
    } else {
      // Redirigir al usuario a la página de cuenta dentro de los tabs
      this.navCtrl.navigateRoot('/tabs/cuenta');
    }
  }

  // Método para verificar si un objeto tiene claves
  hasKeys(obj: any): boolean {
    return Object.keys(obj).length > 0;
  }

  // Mostrar un mensaje emergente (toast)
  async mostrarToast(mensaje: string, color: string = 'success') {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      color: color,
      position: 'top',
    });
    await toast.present();
  }

  // Actualizar los datos del perfil del usuario
  async actualizarPerfil() {
    const datosActualizados: any = {};

    if (this.usuario.nombre) datosActualizados.nombre = this.usuario.nombre;
    if (this.usuario.apellidos) datosActualizados.apellidos = this.usuario.apellidos;
    if (this.usuario.telefono) datosActualizados.telefono = this.usuario.telefono;
    if (this.usuario.direccion) datosActualizados.direccion = this.usuario.direccion;
    if (this.usuario.sexo) datosActualizados.sexo = this.usuario.sexo;

    try {
      await this.userService.actualizarUsuario(datosActualizados);
      this.mostrarToast('Perfil actualizado exitosamente.', 'success');
    } catch (error) {
      console.error('Error al actualizar el perfil:', error);
      this.mostrarToast('Error al actualizar el perfil.', 'danger');
    }

    // Redirigir al usuario a la página de tabs después de actualizar el perfil
    this.navCtrl.navigateRoot('/tabs/cuenta');
  }

  // Navegar a la página de cambio de contraseña
  navegarSeguridad() {
    this.navCtrl.navigateForward('/seguridad');
  }

  // Cerrar la sesión del usuario
  cerrarSesion() {
    this.userService.setUsuario({});
    console.log('Sesión cerrada');
    this.mostrarToast('Sesión cerrada.', 'warning');
    this.navCtrl.navigateRoot('/login');
  }
}
