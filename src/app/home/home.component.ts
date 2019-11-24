import {Component} from '@angular/core';
import {Product, ProductService} from "../shared/product.service";

@Component({
  selector: 'nga-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {

  products: Product[] = [];

  constructor(private _productService: ProductService) {
    this.products = this._productService.getProducts();
  }

}
