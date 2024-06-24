import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../model/product.model';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  producto?: IProduct;
  loading: boolean = true;

  constructor(
    private _route: ActivatedRoute,
    private _apiService: ApiService
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
     this._apiService.getProductById(Number(params['productId'])).subscribe((data: IProduct) => {
      this.producto = data;
      this.loading = false;
     })
      
    });
  }
}
