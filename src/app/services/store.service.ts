import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CartProduct } from '../models/cart-product.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private loggedUserSubject = new Subject<User>();
  private userCart = new Subject<CartProduct[]>();

  constructor() { }

  getLoggedUser(): Observable<User> {
    return this.loggedUserSubject.asObservable();
  }
  storeLoggedUser(user: User) {
    this.loggedUserSubject.next(user);
  }

  getUserCart(): Observable<CartProduct[]> {
    return this.userCart.asObservable();
  }
  storeUserCart(cartProduct: CartProduct[]) {
    this.userCart.next(cartProduct);
  }
}
