
export interface Producto {
  nombre: string;
  precio: number;
  cantidad: number;
  image: string;
}

export interface Pedido {
  fecha: string;
  productos: Producto[];
  total: number;
}
