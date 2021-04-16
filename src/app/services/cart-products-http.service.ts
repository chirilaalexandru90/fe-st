import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';
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
}
