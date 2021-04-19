import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChange } from '@angular/core';
import { combineLatest, concat, forkJoin, Subscription } from 'rxjs';
import { CartProduct } from '../models/cart-product.model';
import { Product } from '../models/product.model';
import { UserCartOrders } from '../models/user-cart-orders.model';
import { User } from '../models/user.model';
import { CartProductsHttpService } from '../services/cart-products-http.service';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnChanges, OnInit, OnDestroy {
  @Input() loggedUser: User;
  userCartOrders: UserCartOrders = new UserCartOrders();
  cartProductsServiceSubscription: Subscription;
  loggedUserSubscription: Subscription;

  constructor(
    private readonly cartProductsHttpService: CartProductsHttpService
  ) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.getUserCart();
  }

  private getUserCart() {
    this.cartProductsServiceSubscription = this.cartProductsHttpService.getUserCartProducts(this.loggedUser.id)
      .subscribe((cartOrders: UserCartOrders) =>
        this.userCartOrders = new UserCartOrders(cartOrders.id, cartOrders.products));
  }

  ngOnDestroy() {
    if (this.cartProductsServiceSubscription) this.cartProductsServiceSubscription.unsubscribe();
  }
}
