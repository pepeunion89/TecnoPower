import { Injectable } from '@angular/core';
import { Products } from '../models/products';
import { PRODUCTS } from '../mocks/products_mock';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

/*  ESTO HAY QUE IMPLEMENTARLO CUANDO HAGAMOS LAS SOLICITUDES A LA API -------------

  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getProductos():Observable<Producto[]>{

    return this.http.get<Producto[]>(`${this.apiServerUrl}/producto/lista`);

  }
  
  ------------------------------------------------------------------------------- */

  getProducts(): Products[] {
    return PRODUCTS;
  }

  getProductsFiltered(categoryId: number): Products[] {

    let products_filtered: Products[] = [];

    for(let product of PRODUCTS){
      if(product.category.id===categoryId){
        products_filtered.push(product);
      }
    }

    return products_filtered;
  }

  getSearchProductsFiltered(productName: string): Products[] {

    let products_filtered: Products[] = [];

    for(let product of PRODUCTS){

      if(product.product_name.toUpperCase().includes(productName.toUpperCase())){
        products_filtered.push(product);
      }
      
    }

    return products_filtered;
  }

  getSearchProductsFilteredByCategory(productName: string, category: number): Products[] {

    let productsListFiltered: Products[] = this.getProductsFiltered(category);;
    let products_filtered: Products[] = [];

    for(let product of productsListFiltered){

      if(product.product_name.toUpperCase().includes(productName.toUpperCase())){
        products_filtered.push(product);
      }
      
    }

    return products_filtered;
  }


  constructor() { }
}
