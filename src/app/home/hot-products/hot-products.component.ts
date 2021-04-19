import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartProduct } from '../models/cart-product.model';
import { Product } from '../models/product.model';
import { UserCartOrders } from '../models/user-cart-orders.model';
import { User } from '../models/user.model';
import { CartProductsHttpService } from '../services/cart-products-http.service';
import { ProductsHttpService } from '../services/products-http.service';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-hot-products',
  templateUrl: './hot-products.component.html',
  styleUrls: ['./hot-products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  hotProducts: Product[];
  productsServiceSubscription: Subscription;
  @Input() loggedUser: User;

  constructor(
    private readonly productsService: ProductsHttpService,
    private readonly storeService: StoreService,
    private readonly cartProductsHttpService: CartProductsHttpService) { }

  ngOnInit() {
    this.productsServiceSubscription = this.productsService.getProducts().subscribe((r: Product[]) =>
      this.hotProducts = this.extractHotProducts(r));
  }

  private extractHotProducts(pr: Product[]): Product[] {
    return pr.filter((e: Product) => e.discount > 65).sort(() => .5 * Math.random()).slice(0, 12);
  }

  addProduct(productId: number) {
    this.cartProductsHttpService.getUserCartProducts(this.loggedUser.id).subscribe((res: UserCartOrders) => {
      const productExists = res.products.map((p: CartProduct) => p.id).includes(productId);
      let tempProducts = [];

      if (productExists) {
        tempProducts = res.products.map((p: CartProduct) => {
          if (p.id === productId) {
            return new CartProduct(p.id, p.quantity + 1);
          } else return p;
        });

        this.cartProductsHttpService.addNewProductToUserCart(this.loggedUser.id, tempProducts).subscribe(data => data,
          error => console.log(error)
        )
      } else {
        this.cartProductsHttpService.addNewProductToUserCart(this.loggedUser.id, [{ id: productId, quantity: 1 }]).subscribe(data => data,
          error => console.log(error)
        )
      }
    })
  }

  ngOnDestroy() {
    if (this.productsServiceSubscription) {
      this.productsServiceSubscription.unsubscribe();
    }
  }
}
