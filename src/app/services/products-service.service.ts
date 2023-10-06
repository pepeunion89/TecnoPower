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

  getProductsFiltered(categoryId: number): Products[] {

    let products_filtered: Products[] = [];

    for(let product of PRODUCTS){
      if(product.category_id===categoryId){
        products_filtered.push(product);
      }
    }

    return products_filtered;
  }


  constructor() { }
}
