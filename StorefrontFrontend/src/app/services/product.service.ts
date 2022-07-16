import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.backendUrl}/products`);
  }

  getProductById(searchedId: Number): Observable<Product> {
    return this.http.get<Product>(`${environment.backendUrl}/products/` + searchedId);
  }
}
