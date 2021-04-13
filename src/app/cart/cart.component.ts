import { Component, OnDestroy, OnInit } from '@angular/core';
import { combineLatest, concat, Subscription } from 'rxjs';
import { CartOrders } from '../models/order.model';
import { User } from '../models/user.model';
import { CartProductsHttpService } from '../services/cart-products-http.service';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit, OnDestroy {
  loggedUser: User;
  userCartProducts: CartOrders[];
  cartProductsServiceSubscription: Subscription;
  loggedUserSubscription: Subscription;

  constructor(
    private readonly cartProductsHttpService: CartProductsHttpService,
    private readonly storeService: StoreService) { }

  ngOnInit() {
    this.getLoggedUser();
  }

  private getLoggedUser() {
    this.loggedUserSubscription = this.storeService.getLoggedUser().subscribe((user: User) => {
      this.loggedUser = user
      this.getUserCartProduct();
    });
  }

  private getUserCartProduct() {
    this.cartProductsServiceSubscription = this.cartProductsHttpService.getUserCartProducts(this.loggedUser.id)
      .subscribe((cartOrders: CartOrders[]) => this.userCartProducts = cartOrders);
  }

  ngOnDestroy() {
    if (this.cartProductsServiceSubscription) this.cartProductsServiceSubscription.unsubscribe();
    if (this.loggedUserSubscription) this.loggedUserSubscription.unsubscribe();
  }
}
