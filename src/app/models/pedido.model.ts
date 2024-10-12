export interface Pedido {
    fecha: string;
    productos: {
      nombre: string;
      cantidad: number;
      precio: number;
    }[];
    total: number;
  }
  