import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartProduct } from '../models/cart-product.model';
import { Product } from '../models/product.model';
import { UserCartOrders } from '../models/user-cart-orders.model';

@Injectable()
export class CartProductsHttpService {
  private be = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getAllCarts(): Observable<UserCartOrders[]> {
    return this.http.get<UserCartOrders[]>(`${this.be}/carts`, {})
  }

  getUserCartProducts(id: number): Observable<UserCartOrders> {
    return this.http.get<UserCartOrders>(`${this.be}/carts/${id}`, {});
  }

  addNewProductToUserCart(userId: number, products: CartProduct[]) {
    return this.http.put(`${this.be}/carts/${userId}`, { id: userId, products: products });
  }

  createRandomMockProduct() {
    const product = new Product(
      this.randomInteger(1001, 2000),
      this.randomString(),
      this.randomString(),
      this.randomString(),
      [],
      this.randomInteger(10000, 20000),
      this.randomInteger(100, 1000)
    );
    return this.http.post(`${this.be}/products`, product);
  }

  private randomInteger(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  private randomString(): string {
    return Math.random().toString(36).substr(2, 5);
  }
}
