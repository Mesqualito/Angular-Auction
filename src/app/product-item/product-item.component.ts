import {Component, Input} from '@angular/core';
import {Product} from "../shared/product.service";

@Component({
  selector: 'nga-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.sass']
})
export class ProductItemComponent {
  @Input() product: Product;
}
