import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Product } from '../models/product.model';

@Injectable()
export class ProductsHttpService {
  private be = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.be}/products`, {})
      .pipe(map(response => response));
  }
}
