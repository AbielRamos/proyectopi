import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { CarritoService } from '../services/carrito.service';
import { Pedido } from '../models/pedido.model'; // Importar correctamente Pedido

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage {
  dias: { nombre: string; fecha: string }[] = [
    { nombre: 'Lunes', fecha: '2024-10-25' },
    { nombre: 'Martes', fecha: '2024-10-26' },
    { nombre: 'Miércoles', fecha: '2024-10-27' },
    { nombre: 'Jueves', fecha: '2024-10-28' },
    { nombre: 'Viernes', fecha: '2024-10-29' },
  ];

  horas: string[] = [
    '8:00 am - 9:00 am',
    '9:00 am - 10:00 am',
    '10:00 am - 11:00 am',
    '11:00 am - 12:00 pm',
    '12:00 pm - 1:00 pm',
    '1:00 pm - 2:00 pm',
    '2:00 pm - 3:00 pm',
    '3:00 pm - 4:00 pm',
    '5:00 pm - 6:00 pm',
  ];

  diaSeleccionado: string = '';
  horaSeleccionada: string = '';

  constructor(private location: Location, private router: Router, private carritoService: CarritoService) {}

  goBack() {
    this.location.back();
  }

  seleccionarDia(dia: string) {
    this.diaSeleccionado = dia;
  }

  seleccionarHora(hora: string) {
    this.horaSeleccionada = hora;
  }

  continuar() {
    const productosEnCarrito = this.carritoService.obtenerCarrito().productos;

    if (productosEnCarrito.length === 0) {
      alert('Por favor, añade productos al carrito antes de continuar.');
      return;
    }

    if (this.diaSeleccionado && this.horaSeleccionada) {
      const fechaHoraSeleccionada = `${this.diaSeleccionado} ${this.horaSeleccionada}`;

      const nuevoPedido: Pedido = {
        fecha: fechaHoraSeleccionada,
        productos: productosEnCarrito,
        total: this.carritoService.obtenerTotal(),
      };

      this.carritoService.agregarPedido(nuevoPedido);

      this.router.navigate(['/mi-pedido', fechaHoraSeleccionada]);
    } else {
      alert('Por favor, selecciona un día y una hora');
    }
  }
}
