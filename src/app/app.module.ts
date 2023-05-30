import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';

// VAMOS ACA A HABILITAR UNA FUNCION INCREMENTALMENTE
// Sirve para hacer peticiones
import { HttpClientModule } from '@angular/common/http'; //y lo agregamos a imports

// OPTIMIZACION DE IMAGENES AL DARLE SCROLL LE PUEDA IR CARGANDO IMAGEN A MEDIDA QUE BAJA
// https://angular.io/api/common/NgOptimizedImage
import { NgOptimizedImage } from '@angular/common';
 
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
