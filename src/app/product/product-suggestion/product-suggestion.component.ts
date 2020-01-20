import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../shared/services";
import {Observable} from "rxjs";
import {MediaObserver} from "@angular/flex-layout";
import {map, startWith} from "rxjs/operators";

// no real logic in searching for best-fitting suggestions; all products displayed including the one in the
// product-detail.component shown on the same page!
// ToDo: implement suggestion logic and don't show the one which is displayed in product-detail.component

@Component({
  selector: 'nga-product-suggestion',
  templateUrl: './product-suggestion.component.html',
  styleUrls: ['./product-suggestion.component.scss']
})
export class ProductSuggestionComponent implements OnInit {

  @Input() products: Product[];
  readonly columns$: Observable<number>;
  readonly breakpointsToColumnsNumber = new Map([
    ['xs', 2],
    ['sm', 3],
    ['md', 5],
    ['lg', 2],
    ['xl', 3]
  ]);

  constructor(private readonly media: MediaObserver) {
    // If the initial screen size is xs MediaObserver doesn't emit an event
    this.columns$ = this.media.asObservable()
      .pipe(
        map(mc => <number>this.breakpointsToColumnsNumber.get(mc[0].mqAlias)),
        // gets the number of grid columns based on the media query alias
        startWith(3) // bug workaround
      );
  }

  ngOnInit() {
  }

}
