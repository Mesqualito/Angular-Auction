import {Component, OnInit} from '@angular/core';
import {Product, ProductService} from "../shared/product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'nga-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass']
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(private _route: ActivatedRoute, private _productService: ProductService) {}

  ngOnInit(): void {
    const prodId: number = parseInt(this._route.snapshot.params['productId']);
    this.product = this._productService.getProductById(prodId);
  }
}
