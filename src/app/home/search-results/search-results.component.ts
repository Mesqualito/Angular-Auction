import {Component} from '@angular/core';
import {Product, ProductService} from "../../shared/services";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'nga-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {
  readonly products$: Observable<Product[]>;

  constructor(
    private _productService: ProductService,
    private _route: ActivatedRoute
  ) {
    this.products$ = this._route.queryParams.pipe(
      switchMap(queryParams => this._productService.search(queryParams))
    );
  }
}
