import { Injectable } from '@angular/core';
import { Makers } from '../models/makers';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MakersServiceService {

  private apiServerUrl = 'https://fastapi-tecno.onrender.com';

  constructor(private http: HttpClient) { }

  public getMakers():Observable<Makers[]>{
    return this.http.get<Makers[]>(`${this.apiServerUrl}/get_makers`);
  }  

}
