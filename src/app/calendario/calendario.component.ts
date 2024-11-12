import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage {
  dias: string[] = ['Lunes 25 octubre', 'Martes 26 octubre', 'Miércoles 27 octubre', 'Jueves 28 octubre', 'Viernes 29 octubre'];
  horas: string[] = ['8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm'];
  diaSeleccionado: string = '';
  horaSeleccionada: string = '';

  constructor(private router: Router) {}

  seleccionarDia(dia: string) {
    this.diaSeleccionado = dia;
  }

  seleccionarHora(hora: string) {
    this.horaSeleccionada = hora;
  }

  continuar() {
    if (this.diaSeleccionado && this.horaSeleccionada) {
      console.log(`Día seleccionado: ${this.diaSeleccionado}, Hora seleccionada: ${this.horaSeleccionada}`);
      // Navegar a la siguiente página o realizar alguna acción
    } else {
      alert('Por favor, selecciona un día y una hora');
    }
  }
}
