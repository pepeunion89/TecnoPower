import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Products } from '../models/products';
import { environment } from 'src/environments/environment';
//import { PRODUCTS } from '../mocks/products_mock';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

/*  ESTO HAY QUE IMPLEMENTARLO CUANDO HAGAMOS LAS SOLICITUDES A LA API ------------- */

  //private apiServerUrl = 'https://corsproxy.io/?'+encodeURIComponent('https://fastapi-tecno.onrender.com');
  private apiServerUrl = 'https://fastapi-tecno.onrender.com';

  constructor(private http: HttpClient) { }

  public getProducts():Observable<Products[]>{
    return this.http.get<Products[]>(`${this.apiServerUrl}/get_products`);
  }  
 
  public getProductsFiltered(categoryId: number): Observable<Products[]> {
    return this.getProducts().pipe(map(products => products.filter(product => product.category.id === categoryId)));
  }

  public getSearchProductsFiltered(productName: string): Observable<Products[]> {
    return this.getProducts().pipe(map(products => products.filter(product => product.product_name.toUpperCase().includes(productName.toUpperCase()))));
  }
  
  public getSearchProductsFilteredByCategory(productName: string, category: number): Observable<Products[]> {
    return this.getProductsFiltered(category).pipe(map(productsListFiltered => productsListFiltered.filter(product => product.product_name.toUpperCase().includes(productName.toUpperCase()))));
  }



   /*------------------------------------------------------------------------------- */

  /*
  getProducts(): Products[] {
    return PRODUCTS;
  }
  */


}
