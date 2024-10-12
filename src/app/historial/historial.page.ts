import { Component, OnInit } from '@angular/core';
import { QRCodeGeneratorService } from '../services/qrcode-generator.service';
import { Pedido } from '../models/pedido.model'; // Asegúrate de importar tu modelo Pedido

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {
  
  constructor(private qrCodeService: QRCodeGeneratorService) {}

  ngOnInit() {
    // Inicialización si es necesario
  }

  // Método para generar el código QR
  generarQR(pedido: Pedido) {
    const qrData = `Pago de ${pedido.total} por los productos: ${pedido.productos.map(p => p.nombre).join(', ')}`;
    
    this.qrCodeService.generateQRCode(qrData).then(url => {
      // Manejar la URL del código QR aquí, por ejemplo, asignándola a una propiedad
      console.log('Código QR generado:', url);
      // Aquí puedes usar esta URL para mostrar el QR en tu plantilla, asignándolo a una variable
    }).catch(err => {
      // Manejo de errores
      console.error('Error al generar el QR:', err);
    });
  }
}


