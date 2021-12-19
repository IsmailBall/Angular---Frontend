import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Prodcut } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl: string = 'https://localhost:44314/api/';

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<ListResponseModel<Prodcut>> {
    let newPath: string = this.apiUrl + 'products/getall';
    return this.httpClient.get<ListResponseModel<Prodcut>>(newPath);
  }
  getProductsByCategoryId(
    categoryId: number
  ): Observable<ListResponseModel<Prodcut>> {
    let newPath: string = this.apiUrl + 'products/getbycategory?categoryId=' + categoryId;
    return this.httpClient.get<ListResponseModel<Prodcut>>(newPath);
  }
}
