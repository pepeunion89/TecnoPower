import { Injectable } from '@angular/core';
import { Categories } from '../models/categories';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesServiceService {

  private apiServerUrl = 'https://fastapi-tecno.onrender.com';

  constructor(private http: HttpClient) { }

  public getCategories():Observable<Categories[]>{
    return this.http.get<Categories[]>(`${this.apiServerUrl}/get_categories`);
  }  

}
