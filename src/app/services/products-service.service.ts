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
  private apiServerUrl= environment.apiBaseUrl;
  private apiUrl= 'api/products/';
  
  constructor(private http: HttpClient) { }

  public getProducts():Observable<ProductsApi[]>{
    //return this.http.get<Products[]>(`${this.apiServerUrl}/get_products`);
    return this.http.get<ProductsApi[]>(`${this.apiServerUrl}${this.apiUrl}`);
  }  
 
  public getProductsFiltered(categoryId: number): Observable<ProductsApi[]> {
    return this.getProducts().pipe(map(products => products.filter(product => product.category.id === categoryId)));
  }

  public getSearchProductsFiltered(productName: string): Observable<ProductsApi[]> {
    return this.getProducts().pipe(map(products => products.filter(product => product.product_name.toUpperCase().includes(productName.toUpperCase()))));
  }
  
  public getSearchProductsFilteredByCategory(productName: string, category: number): Observable<ProductsApi[]> {
    return this.getProductsFiltered(category).pipe(map(productsListFiltered => productsListFiltered.filter(product => product.product_name.toUpperCase().includes(productName.toUpperCase()))));
  }

  public addProduct(product: ProductsApi):Observable<any>{

    //return this.http.post<ProductsApi>(`${this.apiServerUrl}/new_product`, product);
    return this.http.post<ProductsApi>(`${this.apiServerUrl}${this.apiUrl}`, product);

  }

  public updateProduct(product: ProductsApi):Observable<any>{

    //return this.http.post<ProductsApi>(`${this.apiServerUrl}/new_product`, product);
    return this.http.post<ProductsApi>(`${this.apiServerUrl}${this.apiUrl}${product.id}`, product);

  }

  public deteleProduct(id_product: number):Observable<any>{

    return this.http.delete(`${this.apiServerUrl}${this.apiUrl}${id_product}`);
    
  }


   /*------------------------------------------------------------------------------- */

  /*
  getProducts(): Products[] {
    return PRODUCTS;
  }
  */


}
