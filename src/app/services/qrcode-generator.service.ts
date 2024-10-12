import { Injectable } from '@angular/core';
import * as QRCode from 'qrcode';

@Injectable({
  providedIn: 'root'
})
export class QRCodeGeneratorService {
  generateQRCode(data: string): Promise<string> {
    return QRCode.toDataURL(data, { width: 200 });
  }
}



