import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { typeCategory } from './components/type/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
  API_URL = 'http://localhost:3000/categories'
  API_PRODUCT = ' http://localhost:3000/products'
  Get_Categories = ():Observable<any>=>{
      return this.http.get(this.API_URL)
  }
  add_category = (data:typeCategory):Observable<any>=>{
    return this.http.post(this.API_URL,data)
  }
  get_allCategory = ():Observable<any> => {
    return this.http.get(this.API_URL)
  }
  delete_cate =(id: any):Observable<any> => {
    return this.http.delete(this.API_URL + '/' +id)
  }
  getProductsByCategory = (category: string): Observable<any[]> => {
    return this.http.get<any[]>(`${this.API_PRODUCT}?category=${category}`);
  }
}
