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
  [key: string]: any; // Permite propiedades dinámicas para campos de edición
  usuario: any; // Información del usuario
  editNombres = false;
  editApellidos = false;
  editEmail = false;
  editCelular = false;
  editSexo = false;

  constructor(
    private navCtrl: NavController,
    private userService: UserService,
    private toastController: ToastController,
    private cdr: ChangeDetectorRef // Inyectar ChangeDetectorRef
  ) {}

  ngOnInit() {
    // Obtener los datos del usuario desde el servicio
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

  // Cambiar el modo de edición de los campos
  toggleEdit(campo: string) {
    const campoEditar = `edit${campo.charAt(0).toUpperCase() + campo.slice(1)}`;
    this[campoEditar] = !this[campoEditar];

    // Guardar cambios cuando se termine la edición de un campo
    if (!this[campoEditar]) {
      this.actualizarPerfil(false);
    }

    this.cdr.detectChanges(); // Forzar la detección de cambios
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
  actualizarPerfil(mostrarMensaje = true) {
    if (!this.usuario.nombres || !this.usuario.apellidos || !this.usuario.email || !this.usuario.celular || !this.usuario.sexo) {
      this.mostrarToast('Por favor, completa todos los campos obligatorios.', 'danger');
      return;
    }

    this.userService.setUsuario(this.usuario);
    if (mostrarMensaje) {
      this.mostrarToast('Perfil actualizado exitosamente.', 'success');
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












