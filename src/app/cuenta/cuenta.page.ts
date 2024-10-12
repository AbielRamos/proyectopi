import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {
  usuario = {
    nombres: '',
    apellidos: '',
    numeroIdentidad: '',
    email: '',
    celular: '',
    fechaNacimiento: '',
    sexo: ''
  };

  constructor() { }

  ngOnInit() {
    // Cargar los datos del usuario aquí si es necesario
  }

  actualizarPerfil() {
    console.log('Perfil actualizado', this.usuario);
    // Lógica para actualizar el perfil del usuario
  }

  eliminarCuenta() {
    console.log('Cuenta eliminada');
    // Lógica para eliminar la cuenta del usuario
  }
}

