export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  cantidad?: number; // Esta propiedad es opcional
  image: string; // Asegúrate de que esta propiedad exista
}


