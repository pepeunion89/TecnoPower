import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tags } from '../models/tags'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TagsServiceService {

  private apiServerUrl= environment.apiBaseUrl;
  private apiUrl= 'api/tags/';

  constructor(private http: HttpClient) { }

  public getTags():Observable<Tags[]>{
    //return this.http.get<Products[]>(`${this.apiServerUrl}/get_products`);
    return this.http.get<Tags[]>(`${this.apiServerUrl}${this.apiUrl}`)
  }
  
  public addTag(tag: Tags):Observable<Tags>{
    return this.http.post<Tags>(`${this.apiServerUrl}${this.apiUrl}`, tag);
  }

}
