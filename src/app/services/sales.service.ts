import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  constructor() {}

  addSale(sale: any): Promise<any> {
    // Aquí puedes implementar la lógica para guardar la venta, por ejemplo usando Firebase, API, etc.
    return new Promise((resolve, reject) => {
      try {
        console.log('Venta registrada:', sale);
        resolve(sale);
      } catch (error) {
        reject(error);
      }
    });
  }
}

