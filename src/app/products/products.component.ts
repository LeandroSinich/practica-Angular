import { Component, OnInit } from '@angular/core';
import { Product, productsList } from './products.mock';
import { IProduct } from '../model/product.model';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  products: IProduct[] = [];

  constructor(private _apiService: ApiService){}

  ngOnInit(): void {
    this._apiService.getProducts().subscribe((data: IProduct[]) => {
      this.products = data;
    })
  }
  
}
