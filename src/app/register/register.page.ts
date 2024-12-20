
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
    usuario = {
    nombres: '',
    apellidos: '',
    email: '',
    celular: '',
    direccion: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private navCtrl: NavController, private apiService: ApiService) {}

  register(form: NgForm) {
    if (form.invalid) {
      return; // Si el formulario no es válido, no continuar con el registro
    }

    if (this.usuario.password !== this.usuario.confirmPassword) {
      alert('Las contraseñas no coinciden. Por favor, inténtalo de nuevo.');
      return;
    }

    // Llamar al servicio de registro
    this.apiService.registro(this.usuario.nombres, this.usuario.apellidos, this.usuario.email, this.usuario.password, this.usuario.direccion, this.usuario.celular)
      .subscribe(
        response => {
          console.log('Registro exitoso:', response);
          alert('Usuario registrado exitosamente.');
          this.navCtrl.navigateRoot('/cuenta');
        },
        error => {
          console.error('Error en el registro:', error);
          alert('Hubo un error en el registro. Por favor, inténtalo de nuevo.');
        }
      );
  }
}






