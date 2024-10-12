import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from '../producto/product.model';

interface Pedido {
  productos: Producto[];
  fecha: Date;
}

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private pedidos = new BehaviorSubject<Pedido[]>([]);
  pedidos$ = this.pedidos.asObservable();

  constructor() {}

  addPedido(productos: Producto[]) {
    const newPedido: Pedido = {
      productos,
      fecha: new Date()
    };
    const currentPedidos = this.pedidos.value;
    this.pedidos.next([...currentPedidos, newPedido]);
  }

  getPedidos() {
    return this.pedidos$;
  }

  clearPedidos() {
    this.pedidos.next([]);
  }
}
