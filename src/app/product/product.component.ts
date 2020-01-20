import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product, ProductService} from "../shared/services";
import {Observable} from "rxjs";
import {filter, map, switchMap} from "rxjs/operators";

@Component({
  selector: 'nga-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product$: Observable<Product>;
  suggestedProducts$: Observable<Product[]>;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.product$ = this.route.paramMap.pipe(
      map(params => parseInt(params.get('productId') || '', 10)),
      // ensures that product ID is a valid number which will be used with the 'async'-pipe in the template;
      // 'parseInt()' returns NaN with the "double-bang"-syntax in the filter when no number is entered,
      // non-alpha characters will not get through the 'filter'-operator
      filter(productId => !!productId ),
      // switch over to the observable returned by 'getById()':
      switchMap(productId => this.productService.getById(productId))
    );

    // get the suggested products:
    this.suggestedProducts$ = this.productService.getAll();
  }

  ngOnInit() {
  }

}
