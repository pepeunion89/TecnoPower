import { Injectable } from '@angular/core';
import { Makers } from '../models/makers';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MakersServiceService {

  //private apiServerUrl = 'https://fastapi-tecno.onrender.com';
  private apiServerUrl= environment.apiBaseUrl;
  private apiUrl= 'api/makers/';
  
  constructor(private http: HttpClient) { }

  public getMakers():Observable<Makers[]>{
    //return this.http.get<Makers[]>(`${this.apiServerUrl}/get_makers`);
    return this.http.get<Makers[]>(`${this.apiServerUrl}${this.apiUrl}`)
  }  

}
