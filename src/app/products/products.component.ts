import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../models/product.model';
import { ProductsHttpService } from '../services/products-http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  hotProducts: Product[];
  productsServiceSubscription: Subscription;

  constructor(private readonly productsService: ProductsHttpService) { }

  ngOnInit(): void {
    this.productsServiceSubscription = this.productsService.getProducts().subscribe((r: Product[]) => 
      this.hotProducts = this.extractHotProducts(r));
  }

  private extractHotProducts(pr: Product[]) {
    return pr.filter((e: Product) => e.discount > 65).sort(() => .5 * Math.random()).slice(0, 12);
  }

  ngOnDestroy(): void {
    if (this.productsServiceSubscription) {
      this.productsServiceSubscription.unsubscribe();
    }
  }

}
