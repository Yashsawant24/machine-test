import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

 getProducts(page: number, size: number) {
  return this.http.get<any[]>('http://localhost:3000/products?page=' + page + '&size=' + size);
}


  addProduct(data: { name: string; categoryId: number }) {
  return this.http.post('http://localhost:3000/products', data);
}

  }

