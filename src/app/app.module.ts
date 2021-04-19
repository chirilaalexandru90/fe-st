import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './home/cart/cart.component';
import { ConfigurationComponent } from './home/configuration/configuration.component';
import { HotProductsComponent } from './home/hot-products/hot-products.component';
import { HotProductComponent } from './home/hot-products/product/hot-product.component';
import { RecomendedComponent } from './home/recomended/recomended.component';
import { CartProductsHttpService } from './home/services/cart-products-http.service';
import { ProductsHttpService } from './home/services/products-http.service';
import { UsersHttpService } from './home/services/users-http.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HotProductsComponent,
    HotProductComponent,
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
