import { TestBed } from '@angular/core/testing';

import { CartProductsHttpService } from './cart-products-http.service';

describe('CartProductsHttpService', () => {
  let service: CartProductsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartProductsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
