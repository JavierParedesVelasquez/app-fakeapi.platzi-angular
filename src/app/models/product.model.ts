
// Siempre se tiene que exportar, para que lo puedas importar en components
//Se ve cuales son los atributos esperados de un producto
export interface Product {
  id: number;
  title: string;
  price: number;
  images: string[]; //las imagenes vienen en un array
}

