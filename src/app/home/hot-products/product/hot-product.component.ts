import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-hot-product',
  templateUrl: './hot-product.component.html',
  styleUrls: ['./hot-product.component.scss']
})
export class HotProductComponent implements OnInit {
  @Input() product: Product;
  @Output() productId = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  addToCart() {
    this.productId.emit(this.product.id);
  }
}
