import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable} from "rxjs";
import {Product, ProductService} from "../../shared/services";
import {ActivatedRoute} from "@angular/router";
import {map, switchMap} from "rxjs/operators";

@Component({
  selector: 'nga-categories',
  templateUrl: './categories.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  readonly categoriesName$: Observable<string[]>;
  readonly product$: Observable<Product[]>;

  constructor(
    private _productService: ProductService,
    private _route: ActivatedRoute
  ) {
    this.categoriesName$ = this._productService.getDistinctCategories().pipe(
      // creates an array of category names where the first one is "all":
      map(categories => ['all', ...categories]));

    this.product$ = this._route.params.pipe(
      switchMap(({ category }) => this._getCategory(category)));
  }

  private _getCategory(category: string): Observable<Product[]> {
    category = category.toLowerCase();
    return category === 'all' ? this._productService.getAll() : this._productService.getByCategory(category);
  }
}
