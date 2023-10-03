import { Injectable } from '@angular/core';
import { Products } from '../models/products';
import { PRODUCTS } from '../mocks/products_mock';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  getProducts(): Products[] {
    return PRODUCTS;
  }

  constructor() { }
}
