import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from './components/type/product';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  API_URL = 'http://localhost:3000/products'; 

  constructor(private http: HttpClient) {}

  SearchKeyword(keywords: string): Observable<IProduct[]> { 
    return this.http.get<IProduct[]>(`${this.API_URL}?name_like=${keywords}`); 
  }
}
