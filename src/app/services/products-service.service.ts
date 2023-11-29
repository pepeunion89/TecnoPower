import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Products } from '../models/products';
import { environment } from 'src/environments/environment';
import { ProductsApi } from '../models/product-api';
//import { PRODUCTS } from '../mocks/products_mock';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

/*  ESTO HAY QUE IMPLEMENTARLO CUANDO HAGAMOS LAS SOLICITUDES A LA API ------------- */

  //private apiServerUrl = 'https://corsproxy.io/?'+encodeURIComponent('https://fastapi-tecno.onrender.com');
  //private apiServerUrl = 'https://fastapi-tecno.onrender.com';
  private apiServerUrl: string;
  private apiUrl: string;
  
  constructor(private http: HttpClient) { 

    this.apiServerUrl = environment.apiBaseUrl;
    this.apiUrl = 'api/productos/';

  }

  public getProducts():Observable<Products[]>{
    //return this.http.get<Products[]>(`${this.apiServerUrl}/get_products`);
    return this.http.get<Products[]>(`${this.apiServerUrl}${this.apiUrl}`)
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

  public addProduct(product: ProductsApi):Observable<ProductsApi>{

    return this.http.post<ProductsApi>(`${this.apiServerUrl}/new_product`, product);

  }



   /*------------------------------------------------------------------------------- */

  /*
  getProducts(): Products[] {
    return PRODUCTS;
  }
  */


}
