import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, IProduct } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlBase: string = 'https://fakestoreapi.com/products'

  constructor(private _httpClient: HttpClient) { }

  public getProducts(sort?: string): Observable<IProduct[]>{
    const params = sort ? `sort=${sort}` : ''
    return this._httpClient.get<IProduct[]>(this.urlBase);
  }

  public getProductById(id: number): Observable<IProduct>{
    return this._httpClient.get<IProduct>(`${this.urlBase}/${id}`)
  }

  public getCategory(): Observable<Category[]>{
    return this._httpClient.get<Category[]>(`${this.urlBase}/categories`)
  }

  public postProduct(product: IProduct): Observable<IProduct>{
    return this._httpClient.post<IProduct>(this.urlBase, product);
  }

  public putProduct(product: IProduct, id: number): Observable<IProduct>{
    return this._httpClient.put<IProduct>(`${this.urlBase}/${id}`, product);
  }

  public deleteProduct(id: number): Observable<IProduct>{
    return this._httpClient.delete<IProduct>(`${this.urlBase}/${id}`)
  }
}
