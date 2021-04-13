import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductsHttpService } from './services/products-http.service';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { RecomendedComponent } from './recomended/recomended.component';
import { CartComponent } from './cart/cart.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { UsersHttpService } from './services/users-http.service';
import { CartProductsHttpService } from './services/cart-products-http.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    RecomendedComponent,
    CartComponent,
    ConfigurationComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule

  ],
  providers: [
    ProductsHttpService,
    UsersHttpService,
    CartProductsHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
