export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  cantidad: number;  // Asegúrate de que `cantidad` no pueda ser `undefined`
  image: string;
}

