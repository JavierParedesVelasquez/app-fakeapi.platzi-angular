import { Component, inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';
// Importar la interface product
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'miprimer-app';
  // quiero empezar a hacer peticiones por medio de la utilidad de HttpClient
  http = inject(HttpClient); //patron de inyeccion de dependencias
  products: Product[] = [];

  changeTitle() {
    this.title = 'Cambio de titulo';
  }
  ngOnInit(): void {
    // un componente tiene algo llamado el ciclo de vida, es un disparador para decir okey mi componente ya esta renderizado ya esta listo, hagamos algo:
    // vamos hacer la peticion
    //llamando api
    // suscribe es algo similar a resolver una promesa
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) => {
        //en teoria aca tendriamos la informacion
        this.products = data;
      });
  }
}
