import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartOrders } from '../models/order.model';

@Injectable()
export class CartProductsHttpService {
  private be = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getCartProducts(): Observable<CartOrders[]> {
    return this.http.get<CartOrders[]>(`${this.be}/carts`, {})
      .pipe(map(response => response));
  }

  getUserCartProducts(id: number) {
    return this.http.get<CartOrders[]>(`${this.be}/carts/${id}`, {})
      .pipe(map(response => response));

  }
}
