import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';

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
    sexo: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private navCtrl: NavController, private userService: UserService) {}

  register(form: NgForm) {
    if (form.invalid) {
      return; // Si el formulario no es válido, no continuar con el registro
    }

    if (this.usuario.password !== this.usuario.confirmPassword) {
      alert('Las contraseñas no coinciden. Por favor, inténtalo de nuevo.');
      return;
    }

    // Guardar los datos del usuario en el servicio compartido
    this.userService.setUsuario(this.usuario);
  
    // Confirmar que los datos se guardaron correctamente
    console.log('Usuario registrado en el servicio:', this.userService.getUsuario());
    
    alert('Usuario registrado exitosamente.');
  
    // Redirigir al usuario a la página de cuenta
    this.navCtrl.navigateRoot('/cuenta');
  }
}






