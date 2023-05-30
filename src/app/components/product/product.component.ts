import { Component, Input } from '@angular/core';
// Importamos el models
import { Product } from './../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  // tenemos un componente que recibe un Input, va recibir un title y tenemos que renderizarlo
  //con "!" le dices, no te preocupes en algun momento se lo voy a enviar
  @Input() product!: Product;
}
